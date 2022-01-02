import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { PORT, MONGO } from './config/config'; 

const app: Application = express();
const port: string | number = PORT;

mongoose.connect(MONGO.url)
.then(result => console.log('Connected to MongoDB'))
.catch(err => console.log(`Something went wrong during connecting to MongoDB ${err}`));

app.use(express.json());
app.use(cors());

// Routes

app.listen(port, () => console.log(`Server is running on ${port}`));
