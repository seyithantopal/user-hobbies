import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app: Application = express();
const port: string | number = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Routes

app.listen(port, () => console.log(`Server is running on ${port}`));
