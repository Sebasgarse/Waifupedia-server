import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Picture } from './images-controller/entities/picture.entity';
import { ImagesControllerModule } from './images-controller/images-controller.module';

@Module({
  imports: [
    ImagesControllerModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      entities: [Picture],
      synchronize: true,
      database: 'database.sqlite',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
