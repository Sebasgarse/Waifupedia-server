import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Picture } from './picture.entity';

@Entity()
export class PictureTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  tag_name: string;

  @ManyToOne(() => Picture, (picture) => picture.tags)
  picture: Picture;
}
