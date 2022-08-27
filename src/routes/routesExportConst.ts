import { Router } from 'express';
import { execute } from '../services/CreateExportConst';

const router = Router();

router.post('/', execute);

export { router };
