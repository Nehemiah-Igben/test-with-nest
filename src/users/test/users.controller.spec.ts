import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../entities/user.entity';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { userStubFactory } from './stubs';

jest.mock('../users.service');

describe('UsersController', () => {
  let usersService: UsersService;
  let usersController: UsersController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);

    jest.clearAllMocks();
  });

  describe('findOneUser', () => {
    describe('when find one user is called with a valid user id', () => {
      let user: User;
      beforeEach(async () => {
        user = await usersController.findUserById(userStubFactory().id);
      });

      test('then it should call the user service with user id', () => {
        expect(usersService.findUserById).toBeCalledWith(userStubFactory().id);
      });
    });
  });
});
