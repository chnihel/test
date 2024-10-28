import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createProductDto } from './dto/create-product.dto';
import { InterfaceProduct } from './interface/product-interface';
import { Model } from 'mongoose';
import { UpdateProductDto } from './dto/update-product.dto';
import { NotificationService } from 'src/notification/notification.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private productModel: Model<InterfaceProduct>,
    private readonly notificationService:NotificationService
  ) {}
  async CreateProduct( 
    CreateProducts: createProductDto,token:string
  ): Promise<InterfaceProduct> {
    const Prod = await new this.productModel(CreateProducts);
    if(token){
      await this.notificationService.sendNotification(token,Prod)
    }
    return Prod.save();
  }
  async GetAll(): Promise<InterfaceProduct[]> {
    const AllOfThem = await this.productModel.find();
    return AllOfThem;
  }
  async GetbyId(id:string): Promise<InterfaceProduct> {
    const getproduct = await this.productModel.findById(id);
    return getproduct;
  }
  async updateAllData(id: string, updateData: UpdateProductDto): Promise<InterfaceProduct> {
    const updatedData = await this.productModel.findByIdAndUpdate(id,updateData,{ new: true }
    );
    return updatedData;
  }
  async deleteAll( id: string, deletData: UpdateProductDto): Promise<InterfaceProduct> {
    const deleteAllData = await this.productModel.findByIdAndDelete(id,deletData);
    return deleteAllData;
  }
  }
