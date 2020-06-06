import { DogsController } from './dogs.controller';
import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Module({
  controllers:[DogsController],
  providers: [DogsService]
})
export class DogsModule {
  constructor(private dogsService:DogsService){}
}
