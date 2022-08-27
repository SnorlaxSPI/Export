import { Router } from 'express';
import { CreateExportClass } from '../services/CreateExportClass';

const createExportClass = new CreateExportClass();

const router = Router();

router.post('/', createExportClass.execute);

export { router };
