import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InterfaceSub } from './Interface/interface';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';

@Injectable()
export class SubcategoryService {
  constructor(
    @InjectModel('Subcategory') private SubcategoryModel: Model<InterfaceSub>
  ) {}
  async subCategory(
    CreateSubcategoryDto: CreateSubcategoryDto
  ): Promise<InterfaceSub> {
    const subcat = await new this.SubcategoryModel(CreateSubcategoryDto);
    return subcat.save();
  }
  async GetAll(): Promise<InterfaceSub[]> {
    const Alldata = await this.SubcategoryModel.find();
    return Alldata;
  }
  async updated(
    id: string,
    updatedata: UpdateSubcategoryDto
  ): Promise<InterfaceSub> {
    const Updatesub = await this.SubcategoryModel.findByIdAndUpdate(
      id,
      updatedata,
      { new: true }
    );
    return Updatesub;
  }
  async Delted(
    id: string,
    deleteData: UpdateSubcategoryDto
  ): Promise<InterfaceSub> {
    const deletetByID = await this.SubcategoryModel.findByIdAndDelete(
      id,
      deleteData
    );
    return deletetByID;
  }
  async findbyID(
    id: string,
    finddatabyid: UpdateSubcategoryDto
  ): Promise<InterfaceSub> {
    const findByIDdata = await this.SubcategoryModel.findById(id, finddatabyid);
    return findByIDdata;
  }
}
