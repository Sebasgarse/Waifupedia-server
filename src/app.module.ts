import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PicturesModule } from './pictures/pictures.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      autoLoadEntities: true,
      synchronize: true,
      database: 'database.sqlite',
    }),
    PicturesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
