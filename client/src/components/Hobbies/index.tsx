import React, { FC, useState, useRef, useEffect, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { IHobby } from '../../types/interfaces';
import { createHobby, deleteHobby } from '../../store/actions/hobbyActions';
import Hobby from '../Hobby';

type Props = {
  hobbies: IHobby[];
  userId: string | null;
};

const Hobbies: FC<Props> = ({ hobbies, userId }) => {
  const dispatch = useDispatch();
  const [hobbyObject, setHobbyObject] = useState<Partial<IHobby>>({
    passionLevel: 'low',
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
    dispatch(createHobby(userId, hobbyObject));
    setHobbyObject({
      passionLevel: 'low',
      name: '',
      year: 2000
    });
  };

  const handleDeleteHobby = (id: string) => {
    dispatch(deleteHobby(userId, id));
  };
  
  return (
    <div className="hobbiesWrapper">
      <form id='hobbyForm' className="hobbiesForm" onSubmit={handleSubmit}>
        <select value={hobbyObject?.passionLevel} onChange={handleHobbyObject} data-hobby-type="passionLevel">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="veryHigh">Very-High</option>
        </select>
        <input
          onChange={handleHobbyObject}
          type="text"
          placeholder="Enter user hobby"
          value={hobbyObject?.name}
          data-hobby-type="name"
        />
        <input
          onChange={handleHobbyObject}
          type="number"
          min={2000}
          placeholder="Enter year"
          max={new Date().getFullYear()}
          value={hobbyObject?.year}
          data-hobby-type="year"
        />
        <input type="submit" form="hobbyForm" value="Add" />
      </form>
      <div className="hobbiesList">
        {hobbies.map((hobby: IHobby, i: number) => (
          <Hobby
            hobby={hobby}
            key={i}
            onDelete={handleDeleteHobby}
          />
        ))}
        <div ref={hobbyListBottomRef} />
      </div>
    </div>
  );
};

export default Hobbies;
