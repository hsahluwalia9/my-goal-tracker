import express from "express";
import cors from "cors";
import "reflect-metadata";
import { createConnection, getConnection } from "typeorm";
import { Goal } from "./entity/Goal";

createConnection();

const app = express();
app.use(cors());
const port = process.env.port || 5000;

interface IGoal {
  title: string;
}

app.get("/goals", async (_req: any, res: { json: (arg0: IGoal[]) => void }) => {
  console.log('entering GET goals endpoint');
  let goals = await getConnection().getRepository(Goal).find();
  return res.json(goals);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
