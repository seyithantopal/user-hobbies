import React, { FC } from 'react';
import { PassionLevel } from '../../types/enums';
import { IHobby } from '../../types/interfaces';

type Props = {
  hobby: IHobby;
  onDelete: (id: string) => void;
};

const Hobby: FC<Props> = ({ hobby, onDelete }) => {
  return (
    <>
      <div className="hobbyBox">
        <div className="hobbyPassionLevel">{`Passion: ${PassionLevel[hobby.passionLevel]}`}</div>
        <div className="hobbyName">{hobby.name}</div>
        <div className="hobbyYear">{`Since ${hobby.year}`}</div>
        <div className="deleteIcon" onClick={() => onDelete(hobby._id)}>&times;</div>
      </div>
    </>
  );
};

export default Hobby;
