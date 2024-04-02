import express from 'express';
import { authenticate } from '../common/middlewares/auth.middleware';
import itemRouter from './item.router';
import FolderController from '../modules/folder/folder.controller';
import FolderService from '../modules/folder/folder.service';

const router = express.Router();

const folderController = new FolderController(new FolderService());

router.get('/', authenticate, folderController.getFolders.bind(folderController));
router.get(
  '/users/:userId',
  authenticate,
  folderController.getFoldersByUserId.bind(folderController)
);
router.post('/', authenticate, folderController.createFolder.bind(folderController));
router.put('/update/:id', authenticate, folderController.updateFolder.bind(folderController));
router.delete('/delete/:id', authenticate, folderController.deleteFolder.bind(folderController));

router.use('/items/', itemRouter);

export default router;
