import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthDTO } from './authdto/authdto';
import * as argons2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private  userService:  UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ){}
  async signIn(data: AuthDTO){
    const user = await this.userService.finByemail(data.email);
    if (!user) throw new BadRequestException("user does not exist");
    const passwordMatches = await argons2.verify(user.password, data.password)
    if(!passwordMatches)
      throw new BadRequestException('password is incorrect');
    const tokens = await this.getTokens(user._id, user.email);
    await this.updateRefreshToken(user._id, tokens.refreshToken);
    return {user,tokens};
  }
  async updateRefreshToken(userID: any,refreshToken:string){
    const hashedRefreshToken = await this.hashData(refreshToken);
    await this.userService.update(userID,{
      refreshToken: hashedRefreshToken,
    });
  }
  hashData(data: string){
    return argons2.hash(data);
  }
  async getTokens(userID: any, email: string){
    const[accessToken,refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userID,
          email,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userID,
          email,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn:'1d',
        },
      ),
    ]);
    return {
      accessToken, refreshToken
    }
  }
}


