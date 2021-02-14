import { getConnection } from 'typeorm';
import { Goal } from './entity/Goal';

type GetGoalsFunc = () => Promise<Array<Goal>>;

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
