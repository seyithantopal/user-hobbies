import mongoose, { Schema } from 'mongoose';
import { IHobby, IUser } from '../types/interfaces';

const hobbySchema: Schema = new Schema({
  passionLevel: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  user: { type: Schema.Types.ObjectId, ref: 'users' }
});

export default mongoose.model<IHobby>('hobbies', hobbySchema);
