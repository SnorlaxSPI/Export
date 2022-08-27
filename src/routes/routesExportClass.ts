import { Router } from 'express';
import { CreateExportClass } from '../services/CreateExportClass';

const createExportClass = new CreateExportClass();

const router = Router();

/**
 * Export default criado no CreateExportDefault 
 * com o método execute
 */

router.post('/', createExportClass.execute);

export { router };
