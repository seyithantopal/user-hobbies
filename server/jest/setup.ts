import mongoose from 'mongoose';
import { MONGO } from '../src/config/config';

export const connect = async () => {
  return await mongoose.connect(MONGO.testUrl);
};

export const disconnect = async () => {
  await mongoose.connection.close();
};

export async function addNewData(data: any, schema: any) {
  const newData = new schema(data);
  return await newData.save();
}
