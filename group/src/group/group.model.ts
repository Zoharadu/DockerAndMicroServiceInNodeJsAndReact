import mongoose from 'mongoose';
import { Schema } from "mongoose";
import { Group } from './group.interface';

export const groupSchema = new Schema({
    
    nameOfGroup: {
        type: String,
        required: true
    },
    groups: [{
        type: Schema.Types.ObjectId,
        required: true
    }],
    persons: [{
        type: Schema.Types.ObjectId,
        required: true
    }]
});

export const modelGroup = mongoose.model<Group & Document>('groups', groupSchema);

groupSchema.index({ _id: 1, nameOfGroup: 1 });


