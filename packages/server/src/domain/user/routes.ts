import express from 'express';
import { getUsers, createUser } from './userController';

const userRouter = express.Router();

userRouter.get('/users', async (_req, res) => {
  let users = await getUsers();
  return res.json(users);
});

userRouter.post('/users', async (req, res) => {
  const { firstName, lastName, username, password } = req.body;

  // TODO: wrap validations in domain
  if (!firstName || !lastName || !username || !password) {
    return res
      .json({
        message: 'Invalid request with missing or null properties.',
      })
      .status(400);
  }

  let createdUser = await createUser(req.body);
  return res.json(createdUser);
});

export default userRouter;
