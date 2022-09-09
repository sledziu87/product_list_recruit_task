import express, { Express, Request, Response } from 'express';
import { productSchema } from '../model/model';

const app: Express = express();
app.post('/products/add', (req: Request, res: Response) => {
  const { error } = productSchema.validate(req.body);

  if (error) {
    console.log('POST error request: ', error);
    return res.send('Invalid Request.')
  }

  res.send('POST succeed');
});
