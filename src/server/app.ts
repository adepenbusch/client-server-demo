import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import * as routes from './routes/routes';
import { getProducts } from './controllers/getProducts';
import { putProduct } from './controllers/putProduct';

const app = express();
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

//app.get(`${routes.PRODUCTS}`, getProducts);
//app.put(`${routes.PRODUCTS}`, putProduct);

// export our app
export default app;
