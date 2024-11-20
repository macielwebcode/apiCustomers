import { Router } from 'express'
import DemandaController from '../controllers/DemandaController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', DemandaController.index)
router.post('/', DemandaController.store)
router.put('/:id', loginRequired, DemandaController.update)
router.get('/:id', DemandaController.show)
router.delete('/:id', loginRequired, DemandaController.delete)

export default router;