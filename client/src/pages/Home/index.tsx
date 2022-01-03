import React, { FC, useState, useEffect } from 'react';
import { IUser, IHobby } from '../../types/interfaces';
import Users from '../../components/Users';
import { getUsers } from '../../api';

const Home: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isClicked, setIsClicked] = useState<any>({});
  const [selectedUserID, setSelectedUserID] = useState<string | null>(null);
  const handleSelectUser = (id: string) => {
    console.log('id: ', id);
    /*setIsClicked((state: any) => ({
      [id]: !state[id]
    }));*/
    setIsClicked((state: any) => {
      console.log(state[id]);
      if (!!state[id]) setSelectedUserID(null);
      else setSelectedUserID(id);
      const newState = { [id]: !state[id] };
      return newState;
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: { results: users } }: { data: { results: IUser[] } } = await getUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);
  return (
    <div className='homeWrapper'>
      <div className='userHobbies'>
        <div className='users'>
          <Users
            users={users}
            onClick={handleSelectUser}
            isClicked={isClicked}
          />
        </div>
        <div className='hobbies'>
          {`Hobbies and selected user id: ${selectedUserID}`}
        </div>
      </div>
    </div>
  );
};

export default Home;
