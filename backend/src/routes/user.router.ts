import express from 'express';
import UserController from '../modules/user/user.controller';
import { authenticate } from '../common/middlewares/auth.middleware';
import { upload } from '../common/utils/multer.util';
import UserService from '../modules/user/user.service';

const router = express.Router();

const userController = new UserController(new UserService());

router.get('/:userId', authenticate, userController.getUserById.bind(userController));
router.get(
  '/:userId/folders/teams',
  authenticate,
  userController.getTeamsFoldersByUserId.bind(userController)
);
router.post(
  '/:userId/teams/:teamId',
  authenticate,
  userController.addUserToTeamByIds.bind(userController)
);
router.patch(
  '/:userId',
  upload.single('image'),
  userController.updateUserById.bind(userController)
);

export default router;
