import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  create(cat: Cat) {
    console.log('had created');
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
