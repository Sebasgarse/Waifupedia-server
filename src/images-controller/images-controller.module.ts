import { Module } from '@nestjs/common';
import { ImagesControllerService } from './images-controller.service';
import { ImagesControllerController } from './images-controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Picture } from './entities/picture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Picture])],
  controllers: [ImagesControllerController],
  providers: [ImagesControllerService],
})
export class ImagesControllerModule {}
