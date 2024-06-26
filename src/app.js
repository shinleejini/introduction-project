import express from 'express';
import { SERVER_PORT } from './constants/env.constant.js';
import { productsRouter } from './routers/products.router.js';
import { connect } from './schemas/index.js';

connect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', productsRouter);

app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT}번 포트에 연결되었습니다.`);
})