import React, { FC, useState, useRef, useEffect, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { IUser } from '../../types/interfaces';
import User from '../User';
import { createUser } from '../../store/actions/userActions';

type Props = {
  users: IUser[];
  onClick: any;
  isClicked: any
};

const Users: FC<Props> = ({ users, onClick, isClicked }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const userListBottomRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    userListBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [users]);


  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(createUser({ name }));
    setName('');
  };
  
  return (
    <div className="usersWrapper">
      <form id='userForm' className="usersForm" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter user name"
          value={name}
        />
        <input type="submit" form="userForm" value="Add" />
      </form>
      <div className="usersList">
        {users.map((user: IUser, i: number) => (
          <User
            user={user}
            onClick={() => onClick(user._id)}
            isClicked={isClicked}
            key={i}
          />
        ))}
        <div ref={userListBottomRef} />
      </div>
    </div>
  );
};

export default Users;
