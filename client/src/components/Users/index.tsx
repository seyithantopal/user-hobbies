import React, { FC, SyntheticEvent } from 'react';
import { IHobby } from '../../types/interfaces';
import User from '../User';

type UserType = {
  _id: string;
  name: string;
  hobbies: IHobby[];
};

const users: UserType[] = [
  { _id: '1', name: 'John', hobbies: [] },
  { _id: '2', name: 'Peter', hobbies: [] },
  { _id: '3', name: 'Markus', hobbies: [] },
  { _id: '4', name: 'John', hobbies: [] },
  { _id: '5', name: 'Peter', hobbies: [] },
  { _id: '6', name: 'Markus', hobbies: [] },
  { _id: '7', name: 'John', hobbies: [] },
  { _id: '8', name: 'Peter', hobbies: [] },
  { _id: '9', name: 'Markus', hobbies: [] },
];

const handleSubmit = (e: SyntheticEvent) => {
  e.preventDefault();
  console.log('clicked');
};

type Props = {
  onClick: any;
  isClicked: any
};

const Users: FC<Props> = ({ onClick, isClicked }) => {
  /*const [isClicked, setIsClicked] = useState<any>({});
  const [selectedID, setSelectedID] = useState<string>('');
  const handleUserBoxClick = (id: string) => {
    console.log('id: ', id);
    setIsClicked((state: any) => ({
      [id]: !state[id]
    }));
  };*/
  
  return (
    <div className="usersWrapper">
      <div className="usersForm">
        <form id='form' onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter user name" />
        </form>
        <input type="submit" form="form" />
      </div>
      <div className="usersList">
        {users.map((user: UserType, i: number) => (
          <User
            user={user}
            onClick={() => onClick(user._id)}
            isClicked={isClicked}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
