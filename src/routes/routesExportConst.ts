import { Router } from 'express';
import { execute } from '../services/CreateExportConst';

//const createServices = new CreateServices();

const router = Router();

/**
 * Export default criado no CreateExportDefault 
 * com o método execute
 */

router.post('/', execute);

export { router };
