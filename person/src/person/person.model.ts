import { Schema } from "mongoose";
import mongoose from 'mongoose';

export const personSchema=new Schema({
    nameOfPerson:String,
    groups: [{
        type: Schema.Types.ObjectId,
        required: true
    }],
});

export const modelPerson=mongoose.model('persons',personSchema);

personSchema.index( {_id: 1,nameOfGroup: 1} );
