import React, { FC } from 'react';
import { IHobby } from '../../types/interfaces';

type Props = {
  hobby: IHobby,
};

const Hobby: FC<Props> = ({ hobby }) => {
  return (
    <>
      <div className="hobbyBox">
        <div>{hobby.passionLevel}</div>
        <div>{hobby.name}</div>
        <div>{hobby.year}</div>
        <div className="deleteIcon">&times;</div>
      </div>
    </>
  );
};

export default Hobby;
