import React, { FC } from 'react';
import { IHobby } from '../../types/interfaces';

type Props = {
  hobby: IHobby;
  onDelete: (id: string) => void;
};

const Hobby: FC<Props> = ({ hobby, onDelete }) => {
  return (
    <>
      <div className="hobbyBox">
        <div>{`Passion: ${hobby.passionLevel}`}</div>
        <div className="hobbyName">{hobby.name}</div>
        <div className="hobbyYear">{`Since ${hobby.year}`}</div>
        <div className="deleteIcon" onClick={() => onDelete(hobby._id)}>&times;</div>
      </div>
    </>
  );
};

export default Hobby;
