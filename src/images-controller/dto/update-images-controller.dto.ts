import { PartialType } from '@nestjs/mapped-types';
import { CreateImagesControllerDto } from './create-images-controller.dto';

export class UpdateImagesControllerDto extends PartialType(CreateImagesControllerDto) {}
