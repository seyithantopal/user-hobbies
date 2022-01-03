import mongoose from 'mongoose';
import { Request, Response } from 'express';
import userSchema from '../models/userSchema';
import { IUser } from '../types/interfaces';


export const getAllUsers = (req: Request, res: Response) => {
  userSchema.find()
  .exec()
  .then(users => res.status(200).json({ message: 'Fetch successful', results: users }))
  .catch(err => res.status(400).json({ message: `Error: ${err}` }));
};

export const getUserById = (req: Request, res: Response) => {
  const { id } = req.query;
  userSchema.findById({ _id: id })
    .then((user) => {
      return res.status(200).json({ message: 'Fetch successful', results: user });
    })
    .catch((err) => res.status(400).json({ message: `Error: ${err}` }));
};

export const createUser = (req: Request, res: Response) => {
  const { name } = req.body;
  const user = new userSchema({
    _id: new mongoose.Types.ObjectId(),
    name,
  });
  return user.save()
  .then((result: any) => res.status(201).json({ message: 'User created', result }))
  .catch((err: any) => res.status(400).json({ message: `Error: ${err}` }));
};

export const updateUser = (req: Request, res: Response) => {
  const { id, hobby_id } = req.body;
  userSchema.findById(id)
  .then((user: IUser) => {
    if (user.hobbies.filter((hobby: any) => hobby.equals(new mongoose.Types.ObjectId(hobby_id))).length > 0) {
      userSchema.updateOne(
        { _id: id },
        { $pull: { hobbies: hobby_id } },
        (result: any) => {
          if (!result) console.log('There is no hobby updated');
        },
      );
    } else {
      userSchema.updateOne(
        { _id: id },
        { $push: { hobbies: hobby_id } },
        (result: any) => {
          if (!result) console.log('There is no hobby updated');
        },
      );
    }
    res.status(200).json({ message: 'User updated' });
  })
  .catch((err) =>
    res.status(404).json({ message: `Error: There is no user to update ${err}` }),
  );
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.body;
  userSchema.findOneAndDelete({ _id: id }, (err: any, user: any) => {
    if (!user) {
      res.status(404).json({ message: 'There is no user deleted' });
    } else {
      res.status(200).json({ message: 'User deleted' });
    }
  });
};
