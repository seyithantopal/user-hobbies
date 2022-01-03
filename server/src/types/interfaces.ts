export interface IHobby {
  passionLevel: string;
  name: string;
  year: number;
};

export interface IUser {
  name: string;
  hobbies: [IHobby];
};

export interface ICreateUser {
  name: string;
};

export interface IUpdateUser {
  id: string;
  hobby_id: string;
};

export interface IDeleteUser {
  id: string;
};

export interface ICreateHobby {
  passionLevel: string;
  name: string;
  year: number;
};
