import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Picture } from './entities/picture.entity';
import { ImagesControllerService } from './images-controller.service';

@Controller('images')
export class ImagesControllerController {
  constructor(
    private readonly imagesControllerService: ImagesControllerService,
  ) {}

  @Post()
  async create(@Body() pictures: Picture[]) {
    const urls = [];
    for (const picture of pictures) {
      urls.push(this.imagesControllerService.create(picture));
    }

    const ids = await Promise.all(urls);
    return ids;
  }

  @Get()
  findAll() {
    return this.imagesControllerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesControllerService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateImagesControllerDto: UpdateImagesControllerDto,
  // ) {
  //   return this.imagesControllerService.update(+id, updateImagesControllerDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesControllerService.remove(+id);
  }
}
