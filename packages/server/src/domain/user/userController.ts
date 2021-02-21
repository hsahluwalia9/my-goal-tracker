import { getConnection } from 'typeorm';
import { User } from './entity/User';

interface CreateUserRequestBody {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

type GetUsersFunc = () => Promise<Array<User>>;
type CreateUserFunc = (
  createUserRequestBody: CreateUserRequestBody
) => Promise<User>;

export const getUsers: GetUsersFunc = async () => {
  let usersPromise = await getConnection()
    .getRepository(User)
    .find()
    .catch((error) => {
      console.log(`Error occurred getting users from db ${error}`);
      throw error;
    });
  return usersPromise;
};

export const createUser: CreateUserFunc = async (createUserRequestBody) => {
  let user = new User();
  (user.firstName = createUserRequestBody.firstName),
    (user.lastName = createUserRequestBody.lastName),
    (user.username = createUserRequestBody.username),
    (user.password = createUserRequestBody.password);

  let userRepository = getConnection().getRepository(User);
  let createdUserPromise = await userRepository
    .save(user)
    .then((value) => {
      console.log('User saved to db.');
      return value;
    })
    .catch((error) => {
      console.log(`Error occurred saving user to db ${error}`);
      throw error;
    });
  return createdUserPromise;
};
