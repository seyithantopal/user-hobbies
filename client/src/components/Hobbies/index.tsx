import React, { FC, useState, useRef, useEffect, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { IHobby } from '../../types/interfaces';
import User from '../User';
import { createUser } from '../../store/actions/userActions';
import Hobby from '../Hobby';

/*type Props = {
  users: IUser[];
  onClick: any;
  isClicked: any
};*/

const hobbies: IHobby[] = [
  { _id: '1', passionLevel: 'Medium', name: 'Playing', year: 2014 },
  { _id: '2', passionLevel: 'Medium', name: 'Playing', year: 2014 },
  { _id: '3', passionLevel: 'Medium', name: 'Playing', year: 2014 },
  { _id: '4', passionLevel: 'Medium', name: 'Playing', year: 2014 },
  { _id: '5', passionLevel: 'Medium', name: 'Playing', year: 2014 },
  { _id: '6', passionLevel: 'Medium', name: 'Playing', year: 2014 },
  { _id: '7', passionLevel: 'Medium', name: 'Playing', year: 2014 },
  { _id: '8', passionLevel: 'Medium', name: 'Playing', year: 2014 },
];

const Hobbies: FC = () => {
  const dispatch = useDispatch();
  const [hobbyObject, setHobbyObject] = useState<Partial<IHobby>>({
    passionLevel: '',
    name: '',
    year: 2000
  });
  const hobbyListBottomRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    hobbyListBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [hobbies]);

  const handleHobbyObject = (e: any) => {
    const hobbyType = (e.currentTarget.getAttribute('data-hobby-type') as string);
    setHobbyObject((state: any) => ({
      ...state,
      [hobbyType]: e.target.value
    }));
  };


  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // dispatch(createUser({ name }));
    // setName('');
  };
  
  return (
    <div className="hobbiesWrapper">
      <div className="hobbiesForm">
        <form id='hobbyForm' onSubmit={handleSubmit}>
          <input
            onChange={(e) => handleHobbyObject(e)}
            type="text"
            placeholder="Enter passion level"
            value={hobbyObject?.passionLevel}
            data-hobby-type="passionLevel"
          />
          <input
            onChange={(e) => handleHobbyObject(e)}
            type="text"
            placeholder="Enter user hobby"
            value={hobbyObject?.name}
            data-hobby-type="name"
          />
          <input
            onChange={(e) => handleHobbyObject(e)}
            type="text"
            placeholder="Enter year"
            value={hobbyObject?.year}
            data-hobby-type="year"
          />
        </form>
        <input type="submit" form="hobbyForm" value="Add" />
      </div>
      <div className="hobbiesList">
        {hobbies.map((hobby: IHobby, i: number) => (
          <Hobby
            hobby={hobby}
            key={i}
          />
        ))}
        <div ref={hobbyListBottomRef} />
      </div>
    </div>
  );
};

export default Hobbies;
