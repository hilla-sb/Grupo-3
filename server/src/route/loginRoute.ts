import Router from 'express';
import loginController from '../controller/loginController';
import auth from '../middleware.ts/auth';
const router = Router();

router.post('/login', auth.validateUser, loginController);

export default router;