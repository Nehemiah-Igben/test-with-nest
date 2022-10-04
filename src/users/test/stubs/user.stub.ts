import { User } from 'src/users/entities/user.entity';

export const userStubFactory = (): User => {
  return {
    id: 1,
    firstName: 'Bart',
    lastName: 'Allen',
  };
};
