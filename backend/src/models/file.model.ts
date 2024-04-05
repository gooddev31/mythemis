import * as mongoose from 'mongoose';
import File from '../common/interfaces/file.interface';

const FileSchema = new mongoose.Schema<File>({
  path: {
    required: true,
    type: String
  },
  theme: {
    required: true,
    type: String
  },
  date: {
    required: true,
    type: Date
  }
});

const FileModel = mongoose.model('File', FileSchema);

export default FileModel;
