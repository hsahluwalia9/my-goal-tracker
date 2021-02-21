import { getConnection } from 'typeorm';
import { Goal } from './entity/Goal';

interface CreateGoalRequestBody {
  title: string;
  description: string;
  createdBy: string;
}

type GetGoalsFunc = () => Promise<Array<Goal>>;
type CreateGoalFunc = (goalRequestBody: CreateGoalRequestBody) => Promise<Goal>;

export const getGoals: GetGoalsFunc = async () => {
  let goalsPromise = await getConnection()
    .getRepository(Goal)
    .find()
    .catch((error) => {
      console.log(`Error occurred getting goals from db ${error}`);
      throw error;
    });
  return goalsPromise;
};

export const createGoal: CreateGoalFunc = async (goalRequestBody) => {
  let goal = new Goal();
  goal.title = goalRequestBody.title;
  goal.description = goalRequestBody.description;
  goal.createdBy = goalRequestBody.createdBy;
  goal.dateCreated = new Date();

  let goalRepository = getConnection().getRepository(Goal);
  let createdGoalPromise = await goalRepository
    .save(goal)
    .then((value) => {
      console.log('Goal saved to db.');
      return value;
    })
    .catch((error) => {
      console.log(`Error occurred saving goal to db ${error}`);
      throw error;
    });

  return createdGoalPromise;
};
