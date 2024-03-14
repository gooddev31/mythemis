import mongoose from "mongoose";
import ObjectId from "mongoose";

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.Mixed,
        required: true,
        default: [],
    }],
    folders: [
        {
            ref:"Folder",
            type: mongoose.Schema.Types.Mixed,
            required: false,
        }
    ],
    createDate: {
        type: Date,
        default: new Date()
    }
})

const teamModal = mongoose.model("Team", TeamSchema);

export default teamModal;