import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Picture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  title: string;

  @Column('varchar', { length: 200 })
  url: string;

  @Column('datetime', { default: Date.now() })
  created_at: Date;

  @Column('int')
  size_x: number;

  @Column('int')
  size_y: number;

  @Column('int', { default: 1 })
  user_id: number;

  @Column({ default: true })
  isActive: boolean;

  @Column('varchar', { length: 1000, default: '' })
  tags: string;
}
