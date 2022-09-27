import { Test, TestingModule } from '@nestjs/testing';
import { ImagesControllerController } from './images-controller.controller';
import { ImagesControllerService } from './images-controller.service';

describe('ImagesControllerController', () => {
  let controller: ImagesControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagesControllerController],
      providers: [ImagesControllerService],
    }).compile();

    controller = module.get<ImagesControllerController>(ImagesControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
