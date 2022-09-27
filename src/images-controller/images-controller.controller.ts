import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagesControllerService } from './images-controller.service';
import { CreateImagesControllerDto } from './dto/create-images-controller.dto';
import { UpdateImagesControllerDto } from './dto/update-images-controller.dto';

@Controller('images-controller')
export class ImagesControllerController {
  constructor(private readonly imagesControllerService: ImagesControllerService) {}

  @Post()
  create(@Body() createImagesControllerDto: CreateImagesControllerDto) {
    return this.imagesControllerService.create(createImagesControllerDto);
  }

  @Get()
  findAll() {
    return this.imagesControllerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesControllerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagesControllerDto: UpdateImagesControllerDto) {
    return this.imagesControllerService.update(+id, updateImagesControllerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesControllerService.remove(+id);
  }
}
