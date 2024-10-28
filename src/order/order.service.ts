import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InterFaceOrder } from './interface/order-interface';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';


@Injectable()
export class OrderService {
  constructor(
    @InjectModel('order') private orderModel: Model<InterFaceOrder> 
  ){}
  async CreateOrder(
    createorder: CreateOrderDto
  ): Promise<InterFaceOrder> { 
    const Order = await new this.orderModel(createorder);
    return Order.save();
  }
  async GetOrder(
  ): Promise<InterFaceOrder[]>{
    const getorder = await this.orderModel.find();
    return getorder;
  }
  async deletByID (id: string): Promise<InterFaceOrder> {
    const deletorder = await this.orderModel.findByIdAndDelete(id);
    return deletorder;
  }
  async Updateorder(id: string, updateorderdto: UpdateOrderDto
  ): Promise<InterFaceOrder>{
    const updateorder = await this.orderModel.findByIdAndUpdate(id, updateorderdto, {new: true});
    return updateorder;
  }
  async deletAll(): Promise<{Deletedcount: number}>{
    const deletedAll = await this.orderModel.deleteMany({});
    return {Deletedcount: deletedAll.deletedCount};
  }
}

