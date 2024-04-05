import express from 'express';
import FolderController from '../modules/folder/folder.controller';
import FolderService from '../modules/folder/folder.service';
import ItemRouter from '../routes/item.route';
import { authenticate } from '../common/middlewares/auth.middleware';

const router = express.Router();

const folderController = new FolderController(new FolderService());

router.get('/', folderController.getFolders.bind(folderController));
router.get('/users/:userId', folderController.getFoldersByUserId.bind(folderController));
router.post('/', folderController.createFolder.bind(folderController));
router.put('/update/:id', folderController.updateFolder.bind(folderController));
router.delete('/delete/:id', folderController.deleteFolder.bind(folderController));

router.use('/items/', authenticate, ItemRouter);

export default router;
