import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { PictureTag } from './entities/picture-tag.entity';
import { Picture } from './entities/picture.entity';

@Injectable()
export class PicturesService {
  constructor(
    @InjectRepository(Picture)
    private picturesRepository: Repository<Picture>,
    @InjectRepository(PictureTag)
    private pictureTagsRepository: Repository<PictureTag>,
  ) {}

  async create({
    size_x,
    size_y,
    title,
    url,
  }: CreatePictureDto): Promise<Picture> {
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

  // findAll(): Promise<Picture[]> {
  //   return this.picturesRepository
  //     .createQueryBuilder('picture')
  //     .innerJoin('picture.tags', 'tags')
  //     .where('tags.tag_name = :tag', { tag: 'args' })
  //     .getMany();
  // }

  async findOne(id: number) {
    const pic = await this.picturesRepository.findOneBy({ id });
    console.log(pic.tags);
    return pic.tags;
  }

  async findRandom(): Promise<Picture> {
    const pictures = await this.picturesRepository.find();
    const id = Math.floor(Math.random() * pictures.length + 1);
    return this.picturesRepository.findOneBy({ id });
  }

  async update(data: UpdatePictureDto) {
    const picture = await this.picturesRepository.findOneBy({
      id: data.id,
    });

    const { tags, ...ndata } = data;
    tags.forEach((tag) => {
      const pictureTag = new PictureTag();
      pictureTag.picture = picture;

      pictureTag.tag_name = tag;
      this.pictureTagsRepository.save(pictureTag).then((arg) => {
        console.log({ msg: 'saved', arg });
      });
    });
    await this.picturesRepository.save({
      id: data.id,
      ...ndata,
    });
    return `This action updates a #${data.id} imagesController`;
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
