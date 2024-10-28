import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { InjectModel } from '@nestjs/mongoose';
import { interfaceProvider } from './interface/interface';
import * as argon2 from 'argon2';
import { Model } from 'mongoose';

@Injectable()
export class ProviderService {
  constructor (
  @InjectModel('user') private providerModel:Model<interfaceProvider>
  ){}
  async createprovider(createproviderdto:CreateProviderDto): Promise<interfaceProvider>{
    const hash = await this.hashdata(createproviderdto.password)
    const createprovider = await new this.providerModel({...createproviderdto,password:hash})
    return createprovider.save()
  }
  hashdata(data: string){
    return argon2.hash(data)
  }
}
