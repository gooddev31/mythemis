import express from 'express';
import ItemController from '../modules/item/item.controller';
import { authenticate } from '../common/middlewares/auth.middleware';
import ItemService from '../modules/item/item.service';

const router = express.Router();

const itemController = new ItemController(new ItemService());

router.get('/:id', authenticate, itemController.getItemById.bind(itemController));
router.get('/', authenticate, itemController.getItems.bind(itemController));
router.post('/', authenticate, itemController.createItem.bind(itemController));
router.delete('/:id', authenticate, itemController.deleteItem.bind(itemController));
router.put('/:id', authenticate, itemController.updateItem.bind(itemController));

export default router;
