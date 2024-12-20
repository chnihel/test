import {Body,Controller,Delete,Get,HttpStatus,Param,Post,Put,Res,} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Post()
  async createCategory(
    @Res() response,
    @Body() createCategoryDto: CreateCategoryDto
  ) {
    try {
      const newCategory =
        await this.categoryService.CreateCategory(createCategoryDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'category has been created succesfull',
        newCategory,
        statusCode: 200,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'category not created',
        statusCode: 400,
      });
    }
  }
  @Get()
  async GetAllCategories(@Res() response) {
    try {
      const AllCategories = await this.categoryService.getAll();
      return response.status(HttpStatus.OK).json({
        message: 'succefull ',
        AllCategories,
        statusCode: 200,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'bad request',
        statusCode: 400,
      });
    }
  }
  @Delete('/:id')
  async deleteAll(@Res() response, @Param('id') categoryId: string) {
    try {
      const Delted = await this.categoryService.DeletCategory(categoryId);
      return response.status(HttpStatus.OK).json({
        message: 'accepted',
        Delted,
        statusCode: 200,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'bad request',
        statusCode: 400,
      });
    }
  }
  @Put('/:id')
  async UpdateData(
    @Res() response,
    @Param('id') categoryId: string,
    @Body() updatecategorydto: UpdateCategoryDto
  ) {
    try {
      const updated = await this.categoryService.UpdateData(
        categoryId,
        updatecategorydto
      );
      return response.status(HttpStatus.OK).json({
        message: 'Updated',
        updated,
        statusCode: 200,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'not updated',
        statusCode: 400,
      });
    }
  }
  @Get('/:id')
  async GetData(@Res() response, @Param('id') categoryId: string) {
    try {
      const getdataid = await this.categoryService.GetDataById(categoryId);
      return response.status(HttpStatus.OK).json({
        message: 'Get By ID',
        getdataid,
        statusCode: 200,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: "can't get it",
        statusCode: 400,
      });
    }
  }
}
