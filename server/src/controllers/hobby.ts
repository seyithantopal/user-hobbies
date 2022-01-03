import mongoose from 'mongoose';
import { Request, Response } from 'express';
import hobbySchema from '../models/hobbySchema';


export const getAllHobbies = (req: Request, res: Response) => {
  hobbySchema.find()
  .exec()
  .then(hobbies => res.status(200).json({ message: 'Fetch successful', results: hobbies }))
  .catch(err => res.status(400).json({ message: `Error: ${err}` }));
};

export const getHobbyById = (req: Request, res: Response) => {
  const { id } = req.query;
  hobbySchema.findById({ _id: id })
    .then((hobby) => {
      return res.status(200).json({ message: 'Fetch successful', results: hobby });
    })
    .catch((err) => res.status(400).json({ message: `Error: ${err}` }));
};

export const createHobby = (req: Request, res: Response) => {
  const { passionLevel, name, year } = req.body;
  const hobby = new hobbySchema({
    _id: new mongoose.Types.ObjectId(),
    passionLevel,
    name,
    year
  });
  return hobby.save()
  .then((result: any) => res.status(201).json({ message: 'Hobby created', result }))
  .catch((err: any) => res.status(400).json({ message: `Error: ${err}` }));
};

export const deleteHobby = (req: Request, res: Response) => {
  const { id } = req.body;
  hobbySchema.findOneAndDelete({ _id: id }, (err: any, hobby: any) => {
    if (!hobby) {
      res.status(404).json({ message: 'There is no hobby deleted' });
    } else {
      res.status(200).json({ message: 'Hobby deleted' });
    }
  });
};
