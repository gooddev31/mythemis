import express from 'express';
import ItemController from '../controllers/item.controller';

const router = express.Router();

const itemController = new ItemController();

router.get('/:id', itemController.getItem.bind(itemController));
router.get('/', itemController.getItem.bind(itemController));
router.post('/', itemController.addItem.bind(itemController));
router.delete('/delete/:id', itemController.deleteItem.bind(itemController));
router.put('/update/:id', itemController.updateItem.bind(itemController));

export default router;
