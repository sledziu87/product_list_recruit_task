import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose"

dotenv.config();

const app: Express = express();
const local = 'mongodb://localhost:27017/products';
const mongoDb = process.env['MONGO_DB'] || local
const port = process.env['PORT'] || 8000;

app.use(cors());
app.use(express.json());

mongoose.connect(`${mongoDb}`)
  .then(() => console.log('Connected to MongoDB'))
  .catch((e) => console.log('MongoDB connection error ', e));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
