import { CreateDogDto } from './dto/create-dog.dto';
import { DogsService } from './dogs.service';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService:DogsService){}
  @Post()
  async create(@Body() createdDogDto:CreateDogDto) {
    return this.dogsService.create(createdDogDto);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.dogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action returns a #${id} dog`;
  }
}
