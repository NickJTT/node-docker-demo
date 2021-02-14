import express from 'express';
import home from './src/routers/home';

const app = express();

const PORT = 5000;

app.use(express.json());
app.use('/', home);

app.listen(PORT);
