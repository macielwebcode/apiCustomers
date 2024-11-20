import { Router } from 'express'
import CustomerController from '../controllers/CustomerController';


const router = new Router();

router.get('/', CustomerController.index)
router.post('/', CustomerController.store)


export default router;