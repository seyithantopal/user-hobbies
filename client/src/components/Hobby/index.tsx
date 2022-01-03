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
        <div>{hobby.passionLevel}</div>
        <div>{hobby.name}</div>
        <div>{hobby.year}</div>
        <div className="deleteIcon" onClick={() => onDelete(hobby._id)}>&times;</div>
      </div>
    </>
  );
};

export default Hobby;
