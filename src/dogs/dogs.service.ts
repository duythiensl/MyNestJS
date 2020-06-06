import { Dog } from './interfaces/dog.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
    private readonly dogs:Dog[] = [];
    create(dog:Dog){
        console.log('had created a dog')
        this.dogs.push(dog);
    }

    findAll(): Dog[] {
        return this.dogs;
      }
}
