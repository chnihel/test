import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { response } from 'express';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async createAdmin(@Res() response, @Body() createadmindto: CreateAdminDto){
    try {
      const createadmindata = await this.adminService.create(createadmindto);
      return response.status(HttpStatus.ACCEPTED).json({
        message: 'accepted',
        createadmindata,
        statusCode: 200,
      });
    } catch (error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'not accepted!',
        statusCode:400,
      });
    }
  }
  @Get()
  async getAdmin(@Res() response){
    try {
      const createadmindata = await this.adminService.getAdmin();
      return response.status(HttpStatus.ACCEPTED).json({
        message: 'accepted',
        createadmindata,
        statusCode: 200,
      });
    } catch (error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'not accepted!',
        statusCode:400,
      });
    }
  }
  }
