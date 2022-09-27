import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesControllerModule } from './images-controller/images-controller.module';

@Module({
  imports: [ImagesControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
