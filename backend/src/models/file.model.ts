import * as mongoose from 'mongoose';
import File from '../common/interfaces/file.interface';

const FileSchema = new mongoose.Schema<File>({
    name: {
        required: true,
        type: String
    },
    createDate: {
        required: false,
        type: Date,
    }
})

const fileModal = mongoose.model("File", FileSchema);

export default fileModal;