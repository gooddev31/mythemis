import express from 'express';
import { authenticate } from '../common/middlewares/auth.middleware';
import itemRouter from './item.router';
import FolderController from '../controllers/folder.controller';

const router = express.Router();

const folderController = new FolderController();

router.get('/', folderController.getFolder.bind(folderController));
router.get(
  '/users/:userId',
  authenticate,
  folderController.getFoldersByUserId.bind(folderController)
);
router.post('/', folderController.createFolder.bind(folderController));
router.put('/update/:id', folderController.updateFolder.bind(folderController));
router.delete('/delete/:id', folderController.deleteFolder.bind(folderController));

router.use('/item/', itemRouter);

export default router;
