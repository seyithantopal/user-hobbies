import React, { FC } from 'react';
import { IUser } from '../../types/interfaces';

type Props = {
  user: IUser,
  onClick: any;
  isClicked: any
};

const User: FC<Props> = ({ user, onClick, isClicked }) => {

  return (
    <>
      <div onClick={() => onClick()} className={isClicked[user._id] ? `userBox active` : 'userBox'}>{user.name}</div>
    </>
  );
};

export default User;
