import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import Users from '../../components/Users';
import { loadUsers } from '../../store/actions/userActions';
import Hobbies from '../../components/Hobbies';
import { loadHobbies } from '../../store/actions/hobbyActions';
import { IHobby } from '../../types/interfaces';

const Home: FC = () => {
  const dispatch = useDispatch();
  const { users } = useTypedSelector((state) => state.user);
  const { hobbies } = useTypedSelector((state) => state.hobby);
  const [hobbiesState, setHobbiesState] = useState<IHobby[]>(hobbies);

  const [isClicked, setIsClicked] = useState<any>({});
  const [selectedUserID, setSelectedUserID] = useState<string | null>(null);
  const handleSelectUser = (id: string) => {
    setIsClicked((state: any) => {
      if (!!state[id]) {
        setSelectedUserID(null);
      }
      else {
        setSelectedUserID(id);
      }
      return { [id]: !state[id] };
    });
    dispatch(loadHobbies(id));
  };

  useEffect(() => {
    setHobbiesState(isClicked[selectedUserID!] ? hobbies : []);
  }, [hobbies]);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  return (
    <div className='homeWrapper'>
      <div className='userHobbiesWrapper'>
        <h1 className="title">User Hobbies</h1>
        <div className="userHobbies">
          <div className='users'>
            <Users
              users={users}
              onClick={handleSelectUser}
              isClicked={isClicked}
            />
          </div>
          <div className='hobbies'>
            <Hobbies
              hobbies={hobbiesState}
              userId={selectedUserID}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
