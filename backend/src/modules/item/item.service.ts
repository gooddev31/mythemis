import Item from '../../models/item.model';
import Folder from '../../models/folder.model';
import { CreateItemDto } from './dto/create-item.dto';

export default class ItemService {
  public async getItems(amount: number, page: number) {
    const items = await Item.find()
      .limit(amount)
      .skip((page - 1) * amount + page - 1 === 0 ? null : 1);

    return {
      message: 'Items were found',
      data: {
        items
      },
      status: 200
    };
  }

  public async getItemById(id: string) {
    const item = await Item.findById(id);

    if (!item) {
      return {
        message: 'Item not found',
        data: null,
        status: 404
      };
    }

    return {
      message: 'Item was found',
      data: {
        item
      },
      status: 200
    };
  }

  public async createItem(body: CreateItemDto) {
    const folder = await Folder.findById(body.folder.id);

    if (!folder) {
      return {
        message: 'Folder not found',
        data: null,
        status: 404
      };
    }

    const item = await Item.create(body);

    return {
      message: 'Item was created',
      data: {
        item
      },
      status: 201
    };
  }

  public async deleteItem(id: string) {
    const item = await Item.findById(id);

    if (!item) {
      return {
        message: 'Item not found',
        data: null,
        status: 404
      };
    }

    await Item.deleteOne({ id: item.id });

    return {
      message: 'Item was deleted',
      data: null,
      status: 200
    };
  }

  public async updateItem(id: string, { name, favourite, status }) {
    const item = await Item.findById(id);

    if (!item) {
      return {
        message: 'Item not found',
        data: null,
        status: 404
      };
    }

    const updatedItem = await Item.updateOne(
      { _id: item.id },
      {
        name,
        favourite,
        status
      }
    );

    return {
      message: 'Item was updated',
      data: {
        item: updatedItem
      },
      status: 200
    };
  }
}
