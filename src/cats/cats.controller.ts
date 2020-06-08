import { ValidationPipe } from './../common/piple/validation.pipe';
import { JoiValidationPipe } from '../common/piple/joi-alidation.pipe ';
import { ParseIntPipe } from '../common/piple/parse-int.pipe';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import {
  Controller,
  Get,
  HttpCode,
  Req,
  Post,
  Param,
  Body,
  HttpException,
  HttpStatus,
  ForbiddenException,
  UsePipes,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    // throw new ForbiddenException();
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<any[]> {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
    // return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id) {
    return this.catsService.findOne(id);
  }
}
