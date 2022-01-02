import mongoose, { Schema } from 'mongoose';
import { IUser } from '../types/interfaces';

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  hobbies: [{ type: Schema.Types.ObjectId, ref: 'hobbies' }]
});

export default mongoose.model('users', userSchema);
