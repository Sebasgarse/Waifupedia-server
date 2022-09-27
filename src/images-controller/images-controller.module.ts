import { Module } from '@nestjs/common';
import { ImagesControllerService } from './images-controller.service';
import { ImagesControllerController } from './images-controller.controller';

@Module({
  controllers: [ImagesControllerController],
  providers: [ImagesControllerService]
})
export class ImagesControllerModule {}
