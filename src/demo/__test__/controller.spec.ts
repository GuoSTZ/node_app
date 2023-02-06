import { Test, TestingModule } from '@nestjs/testing';
import { DemoController } from '../controller';
import { DemoService } from '../service';
import responseDataFormat from '../../common/responseDataFormat';

describe('DemoController', () => {
  let controller: DemoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoController],
      providers: [DemoService],
    }).compile();

    controller = module.get<DemoController>(DemoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect((await controller.getDemo()).code).toBe(0);
    });
  });
});
