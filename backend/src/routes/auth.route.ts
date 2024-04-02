import express from 'express';
import AuthController from '../modules/auth/auth.controller';
import AuthService from '../modules/auth/auth.service';

const router = express.Router();

const authController = new AuthController(new AuthService());

router.post('/register', authController.register.bind(authController));
router.post('/login', authController.login.bind(authController));
router.post('/logout', authController.logout.bind(authController));

export default router;
