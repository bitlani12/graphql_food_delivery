
import express, { Application, Request, Response } from 'express';

// const express = require('express');
import dotenv from 'dotenv'
dotenv.config();
import { graphqlHTTP } from 'express-graphql'
import schema from './schema/schema'
// import colors from 'colors'
import { connectDB } from './config/db'
const port = process.env.PORT || 8000;


const app: Application = express();

connectDB()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}))
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});