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
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action returns a #${id} cat`;
  }
}
