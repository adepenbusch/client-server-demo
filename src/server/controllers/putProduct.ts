import { Request, Response } from 'express';
import { putMockProducts } from '../mocks/mockProducts';

export const putProduct = (req: Request, res: Response) => {
  const SUCCESS_CODE = 200;
  res.status(SUCCESS_CODE).send(putMockProducts(req.body.name, -1));
};
