import { Router } from 'express';
import CreateServices from '../services/CreateExportDefault';

//const createServices = new CreateServices();

const router = Router();

/**
 * Export default criado no CreateExportDefault 
 * com o método execute
 */

router.post('/', CreateServices.execute);

export { router };
