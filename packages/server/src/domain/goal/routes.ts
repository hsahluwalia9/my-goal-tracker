import express from 'express';
import { getGoals } from './goalController';

const goalRouter = express.Router();

goalRouter.get('/goals', async (_req, res) => {
  let goals = await getGoals();
  return res.json(goals);
});

export default goalRouter;
