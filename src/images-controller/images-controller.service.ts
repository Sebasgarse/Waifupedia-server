import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Picture } from './entities/picture.entity';

@Injectable()
export class ImagesControllerService {
  constructor(
    @InjectRepository(Picture)
    private picturesRepository: Repository<Picture>,
  ) {}

  async create({ size_x, size_y, title, url }): Promise<Picture> {
    const picture = new Picture();
    picture.size_x = size_x;
    picture.size_y = size_y;
    picture.title = title;
    picture.url = url;
    await this.picturesRepository.save(picture);
    return picture;
  }

  findAll(): Promise<Picture[]> {
    return this.picturesRepository.find();
  }

  findOne(id: number): Promise<Picture> {
    return this.picturesRepository.findOneBy({ id });
  }

  async findRandom(): Promise<Picture> {
    const pictures = await this.picturesRepository.find();
    const id = Math.floor(Math.random() * pictures.length + 1);
    return this.picturesRepository.findOneBy({ id });
  }

  // async update(id: number, picture) {
  //   const picture_ = await this.picturesRepository.findOneBy({
  //     id: picture.id
  //   });
  //   picture_.
  //   return `This action updates a #${id} imagesController`;
  // }

  async remove(id: number) {
    try {
      const picture = await this.picturesRepository.findOneBy({ id });
      await this.picturesRepository.remove(picture);
      return `Removed succesfully`;
    } catch (error) {
      console.error(error);
      return 'Error: ' + error;
    }
  }
}
