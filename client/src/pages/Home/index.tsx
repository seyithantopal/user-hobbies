import React, { FC, useState } from 'react';
import Users from '../../components/Users';

const Home: FC = () => {
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
  return (
    <div className='homeWrapper'>
      <div className='userHobbies'>
        <div className='users'>
          <Users onClick={handleSelectUser} isClicked={isClicked} />
        </div>
        <div className='hobbies'>
          {`Hobbies and selected user id: ${selectedUserID}`}
        </div>
      </div>
    </div>
  );
};

export default Home;
