import React, { FC, useState, useEffect } from 'react';
import { IUser, IHobby } from '../../types/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import Users from '../../components/Users';
import { loadUsers } from '../../store/actions/userActions';

const Home: FC = () => {
  const dispatch = useDispatch();
  const { users } = useTypedSelector((state) => state.user);
  

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
    dispatch(loadUsers());
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
