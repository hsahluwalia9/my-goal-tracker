import express from 'express';
import { getGoals, createGoal } from './goalController';

const goalRouter = express.Router();

goalRouter.get('/goals', async (_req, res) => {
  let goals = await getGoals();
  return res.json(goals);
});

goalRouter.post('/goals', async (req, res) => {
  let createdGoal = await createGoal(req.body);
  return res.json(createdGoal);
});

export default goalRouter;
