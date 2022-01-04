import { PassionLevelStrings } from './enums';

export interface IUser {
  _id: string;
  name: string;
  hobbies: string[];
};

export interface IHobby {
  _id: string;
  passionLevel: PassionLevelStrings;
  name: string;
  year: number;
};

export interface IAction<T> {
  type: string;
  payload: T;
}
