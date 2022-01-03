import React, { FC, SyntheticEvent } from 'react';
import { IUser } from '../../types/interfaces';
import User from '../User';

const handleSubmit = (e: SyntheticEvent) => {
  e.preventDefault();
  console.log('clicked');
};

type Props = {
  users: IUser[];
  onClick: any;
  isClicked: any
};

const Users: FC<Props> = ({ users, onClick, isClicked }) => {
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
        <input type="submit" form="form" value="Add" />
      </div>
      <div className="usersList">
        {users.map((user: IUser, i: number) => (
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
