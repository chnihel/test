import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { accessTokenStrategy } from './strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [JwtModule.register({}), ConfigModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService, accessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
