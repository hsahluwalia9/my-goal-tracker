import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import 'reflect-metadata';
import goalRouter from './domain/goal/routes';
import userRouter from './domain/user/routes';
import { createConnection } from 'typeorm';

// Initialize express server
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(goalRouter);
app.use(userRouter);

const port = process.env.port || 5000;

// Start DB Connection and server
createConnection()
  .then((_connection) => {
    console.log(`Server connected to db.`);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(
      `Server cannot start because there was an error connecting to db ${error}`
    );
    throw error;
  });
