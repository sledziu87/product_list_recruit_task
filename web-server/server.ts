import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/api", (req: Request, res: Response) => {
  res.send('Server Body');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
});
