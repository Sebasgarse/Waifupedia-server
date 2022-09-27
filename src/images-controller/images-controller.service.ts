import { Injectable } from '@nestjs/common';
import { CreateImagesControllerDto } from './dto/create-images-controller.dto';
import { UpdateImagesControllerDto } from './dto/update-images-controller.dto';

@Injectable()
export class ImagesControllerService {
  create(createImagesControllerDto: CreateImagesControllerDto) {
    return 'This action adds a new imagesController';
  }

  findAll() {
    return `This action returns all imagesController`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagesController`;
  }

  update(id: number, updateImagesControllerDto: UpdateImagesControllerDto) {
    return `This action updates a #${id} imagesController`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagesController`;
  }
}
