import express from 'express';
import { router } from './routes/routesExportClass';

const app = express();

app.use(express.json());

app.use('/clients', router);

app.listen(3000, () => {
  console.log('🚀🚀 Server Started!!')
})