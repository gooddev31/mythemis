import express from 'express';
import AuthController from '../controllers/auth.controller';

const router = express.Router();

const authController = new AuthController();

router.post('/register', authController.registerUser.bind(authController));
router.post('/login', authController.authenticateUser.bind(authController));
router.post('/logout', authController.logoutUser.bind(authController));

export default router;
