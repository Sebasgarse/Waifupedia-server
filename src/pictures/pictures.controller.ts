import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';

@Controller('pictures')
export class PicturesController {
  constructor(private readonly picturesService: PicturesService) {}

  @Post()
  async create(@Body() dto: CreatePictureDto[]) {
    const urls = [];
    for (const picture of dto) {
      urls.push(this.picturesService.create(picture));
    }

    const data = await Promise.all(urls);
    return data;
  }

  @Get()
  findAll() {
    return this.picturesService.findAll();
  }

  @Get('rand')
  rand() {
    return this.picturesService.findRandom();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.picturesService.findOne(+id);
  }

  @Patch()
  update(@Body() dto: UpdatePictureDto) {
    return this.picturesService.update(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.picturesService.remove(+id);
  }
}
