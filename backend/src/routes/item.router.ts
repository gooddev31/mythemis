import express from 'express';
import ItemController from '../controllers/item.controller';
import { authenticate } from '../common/middlewares/auth.middleware';

const router = express.Router();

const itemController = new ItemController();

router.get('/:id', authenticate, itemController.getItem.bind(itemController));
router.get('/', authenticate, itemController.getItem.bind(itemController));
router.post('/', authenticate, itemController.addItem.bind(itemController));
router.delete('/delete/:id', authenticate, itemController.deleteItem.bind(itemController));
router.put('/update/:id', authenticate, itemController.updateItem.bind(itemController));

export default router;
