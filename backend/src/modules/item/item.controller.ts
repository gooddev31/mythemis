import { Request, Response } from 'express';
import ItemService from './item.service';

export default class ItemController {
  public constructor(private readonly itemService: ItemService) {}

  public async getItems(req: Request, res: Response) {
    const amount = Number(req.query.amount) || 5;
    const page = Number(req.query.page) || 1;

    const items = await this.itemService.getItems(amount, page);

    return res.status(items.status).json(items);
  }

  public async getItemById(req: Request, res: Response) {
    const itemId = req.params.id;

    const item = await this.itemService.getItemById(itemId);

    return res.status(item.status).json(item);
  }

  public async createItem(req: Request, res: Response) {
    const body = req.body;

    const item = await this.itemService.createItem(body);

    return res.status(item.status).json(item);
  }
  
  public async deleteItem(req: Request, res: Response) {
    const folderId = req.params.id;

    const item = await this.itemService.deleteItem(folderId);

    return res.status(item.status).json(item);
  }

  public async updateItem(req: Request, res: Response) {
    const body = req.body;
    const folderId = req.params.id;

    const item = await this.itemService.updateItem(folderId, body);

    return res.status(item.status).json(item);
  }
}
