import express from 'express';
import UserController from '../modules/user/user.controller';
import { upload } from '../common/utils/multer.util';
import UserService from '../modules/user/user.service';

const router = express.Router();

const userController = new UserController(new UserService());

router.get('/:userId', userController.getUserById.bind(userController));
router.get('/:userId/folders/teams', userController.getTeamsFoldersByUserId.bind(userController));
router.post('/:userId/teams/:teamId', userController.addUserToTeamByIds.bind(userController));
router.patch(
  '/:userId',
  upload.single('image'),
  userController.updateUserById.bind(userController)
);

export default router;
