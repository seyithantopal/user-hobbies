export interface IUser {
  _id: string;
  name: string;
  hobbies: IHobby[];
};

export interface IHobby {
  passionLevel: string;
  name: string;
  year: number;
};
