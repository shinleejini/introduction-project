import express from 'express';
import { SERVER_PORT } from './constants/env.constant';

const app = express();
const port = SERVER_PORT;

app.get('/', (req, res, next) => {
return res.json('hello world!!!!!!!!');
})

app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on ${SERVER_PORT}`);
})