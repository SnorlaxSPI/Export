import { Router } from 'express';
import CreateServices from '../services/CreateExportDefault';

const router = Router();

router.post('/', CreateServices.execute);

export { router };
