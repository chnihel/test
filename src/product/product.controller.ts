import {Controller,Post,Body,HttpStatus,Res,Get,Param,Put,Delete,UseInterceptors,UploadedFiles,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { createProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import {diskStorage } from 'multer';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}                                 

  @Post()
  @UseInterceptors(FilesInterceptor("files", 6,{
    storage:diskStorage({
      destination: "./upload",
      filename: (require,file,callback) => callback(null,`${new Date().getTime()}-${file.originalname}`)
    })
  }))
 

  async Products(@Res() response, @Body() createProductDto: createProductDto,@Body('token') token:string,@UploadedFiles() files: Express.Multer.File[]) {
    try {
      createProductDto.image = files.map(item => item.filename);
      const CreateProducts =
        await this.productService.CreateProduct(createProductDto,token);
      return response.status(HttpStatus.CREATED).json({
        message: 'your prdoucts has been created',
        CreateProducts,
        statusCode: 200,
      });
    } catch(err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'failed to create your product'+err,
        statusCode: 400,
      });
    }
  }
  @Get()
  async GetThem(@Res() response) {
    try {
      const AllData = await this.productService.GetAll();
      return response.status(HttpStatus.ACCEPTED).json({
        message: 'i get them All',
        AllData,
        statusCode: 200,
      });
    } catch {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'bad request',
        statusCode: 400,
      });
    }
  }

  @Put('/:id')
  @UseInterceptors(FilesInterceptor("files", 6,{
    storage:diskStorage({
      destination: "./upload",
      filename: (require,file,callback) => callback(null,`${new Date().getTime()}-${file.originalname}`)
    })
  }))
 
  async Updated(@Res() response,  @Param('id') id: string,  @Body() updateproductdto: UpdateProductDto,@UploadedFiles() files: Express.Multer.File[]
  ) {
    try {
      updateproductdto.image = files.map(item => item.filename);
      const updateAllData = await this.productService.updateAllData(id, updateproductdto);
      return response.status(HttpStatus.ACCEPTED).json({
        message: 'updated !',
        updateAllData,
        statusCode: 200,
      });
    } catch {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'not updated !',
        statusCode: 400,
      });
    }
  }
  @Delete('/:id')
  async DeltedById(@Res() response, @Param('id') id: string, deletedData: createProductDto)
  {
    try {
      const deleteAll = await this.productService.deleteAll(id, deletedData);
      return response.status(HttpStatus.OK).json({
        message: 'Delted succesfull',
        deleteAll,
        statusCode: 200,
      });
    } catch {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'bad request',
        statusCode: 400,
      });
    }
  }
  @Get("/:id")
  async GetById(@Res() response, @Param('id') id: string)
  {
    try {
      const getbyid = await this.productService.GetbyId(id);
      return response.status(HttpStatus.OK).json({
        message: 'get succesfull',
        getbyid,
        statusCode: 200,
      });
    } catch {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'bad request',
        statusCode: 400,
      });
    }
  }
}
