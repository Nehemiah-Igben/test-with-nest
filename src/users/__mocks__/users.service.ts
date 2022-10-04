import { userStubFactory } from '../test/stubs';

export const UsersService = jest.fn().mockReturnValue({
  findUserById: jest.fn().mockResolvedValue(userStubFactory()),
  findAllUsers: jest.fn().mockResolvedValue([userStubFactory()]),
  createUser: jest.fn().mockResolvedValue(userStubFactory()),
  deleteUserById: jest.fn().mockImplementation(),
});
