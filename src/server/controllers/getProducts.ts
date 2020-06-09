import { Request, Response } from 'express';
import { getMockProducts } from '../mocks/mockProducts';

export const getProducts = (req: Request, res: Response) => {
  const SUCCESS_CODE = 200;
  res.status(SUCCESS_CODE).send(getMockProducts());
};
