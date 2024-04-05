import express from 'express';
import ItemController from '../modules/item/item.controller';
import ItemService from '../modules/item/item.service';

const router = express.Router();

const itemController = new ItemController(new ItemService());

router.get('/:id', itemController.getItemById.bind(itemController));
router.get('/', itemController.getItems.bind(itemController));
router.post('/', itemController.createItem.bind(itemController));
router.delete('/:id', itemController.deleteItem.bind(itemController));
router.put('/:id', itemController.updateItem.bind(itemController));

export default router;
