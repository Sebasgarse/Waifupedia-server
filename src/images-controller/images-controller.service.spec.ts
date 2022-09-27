import { Test, TestingModule } from '@nestjs/testing';
import { ImagesControllerService } from './images-controller.service';

describe('ImagesControllerService', () => {
  let service: ImagesControllerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagesControllerService],
    }).compile();

    service = module.get<ImagesControllerService>(ImagesControllerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
