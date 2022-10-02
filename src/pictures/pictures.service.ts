import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { Picture } from './entities/picture.entity';

@Injectable()
export class PicturesService {
  constructor(
    @InjectRepository(Picture)
    private picturesRepository: Repository<Picture>,
  ) {}

  async create(dto: CreatePictureDto): Promise<Picture> {
    const picture = this.picturesRepository.create(dto);
    await this.picturesRepository.save(picture);
    return picture;
  }

  findAll(): Promise<Picture[]> {
    return this.picturesRepository.find();
  }

  findOne(id: number) {
    return this.picturesRepository.findOneBy({ id });
  }

  async findRandom(tag = ''): Promise<Picture> {
    let pictures;
    if (!tag) {
      pictures = await this.picturesRepository.find();
    } else {
      pictures = await this.picturesRepository.findBy({
        tags: Like(`%${tag}%`),
      });
    }
    const index = Math.floor(Math.random() * pictures.length);
    return pictures[index];
  }

  async update({ id, ...data }: UpdatePictureDto) {
    await this.picturesRepository.update({ id }, data);
    return this.picturesRepository.findOneBy({ id });
  }

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
