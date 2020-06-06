import { ValidationPipe } from './common/piple/validation.pipe';
import { HttpExceptionFilter } from './common/exception/http-exception.filter';
import { Module,NestModule,MiddlewareConsumer,RequestMethod  } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';

@Module({
  imports: [CatsModule,DogsModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  // providers: [
  //   {
  //     provide: APP_FILTER,
  //     useClass: HttpExceptionFilter,
  //   },
  // ]
})
export class AppModule {}
