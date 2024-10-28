import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { interfaceUser } from './interface/interface';
import { Model } from 'mongoose';
import { UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private usermodel: Model<interfaceUser>
  ){}
  async finByemail( email: string): Promise<interfaceUser>{
    return this.usermodel.findOne({email:email});
  }
  async update(ID: string , updatedata: UpdateUserDto): Promise<interfaceUser>{
    return this.usermodel.findByIdAndUpdate(ID,updatedata, {new: true});
  }
  async saveAdminToken(token: string): Promise<void> {
    // Trouver l'utilisateur avec le rôle d'administrateur
    const admin = await this.usermodel.findOne({ items: 'admin' });

    if (admin) {
      // Mettre à jour le token FCM de l'administrateur
      admin.fcmToken = token;
      await admin.save();  // Sauvegarder les modifications
    } else {
      throw new Error('Administrateur non trouvé');
    }
  }
}
