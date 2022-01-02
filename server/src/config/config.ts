import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

const MONGO = {
  url: (process.env.MONGODB_URI as string),
};

export {
  PORT,
  MONGO
};
