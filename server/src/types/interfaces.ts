export interface IHobby {
  passionLevel: string;
  name: string;
  year: number;
};

export interface IUser {
  name: string;
  hobbies: [IHobby];
};
