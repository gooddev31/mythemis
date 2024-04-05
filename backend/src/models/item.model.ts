import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import IItem from '../common/interfaces/item.interface';

const ItemSchema = new mongoose.Schema<IItem>({
  name: {
    type: String,
    required: true
  },
  payload: {
    type: String,
    required: false
  },
  creator: {
    id: {
      type: ObjectId,
      ref: 'User'
    },
    username: String
  },
  folder: {
    id: {
      type: ObjectId,
      ref: 'Folder'
    }
  },
  lastEdit: {
    required: false,
    type: Date
  },
  createDate: {
    type: Date,
    default: new Date()
  }
});
const ItemModel = mongoose.model('ItemFolder', ItemSchema);

export default ItemModel;
