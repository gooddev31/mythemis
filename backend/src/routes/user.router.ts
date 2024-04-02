import express from 'express';
import UserController from '../controllers/user.controller';
import { authenticate } from '../common/middlewares/auth.middleware';
import { upload } from '../common/utils/multer.util';

const router = express.Router();

const userController = new UserController();

router.get('/:userId', userController.getUser.bind(userController));
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
