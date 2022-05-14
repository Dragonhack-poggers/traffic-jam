import express from 'express';
import swaggerOptions from './config';
import router from './routes';

export const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', router);

const PORT = 3000;

expressJSDocSwagger(app)(swaggerOptions);

app.listen(PORT);

