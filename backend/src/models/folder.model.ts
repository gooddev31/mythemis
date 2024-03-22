import * as mongoose from "mongoose";
import IFolder from "../intefaces/folder.interface";
import { ObjectId } from "mongodb";

const FolderSchema = new mongoose.Schema<IFolder>({
  name: {
    required: true,
    type: String,
  },
  creator: {
    id: {
      type: ObjectId,
      ref: "User",
    },
    username: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  favourite: {
    type: Boolean,
    default: false,
  },
  lastEdit: {
    type: Date,
    required: false,
  },
  createDate: {
    type: Date,
    default: new Date(),
  },
});
const folderModal = mongoose.model("Folder", FolderSchema);

export default folderModal;
