export interface IUser {
  _id: string;
  name: string;
  hobbies: IHobby[];
};

export interface IHobby {
  _id: string;
  passionLevel: string;
  name: string;
  year: number;
};

export interface IAction<T> {
  type: string;
  payload: T;
}
