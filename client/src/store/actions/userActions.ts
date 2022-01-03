import { LOAD_USERS } from './actionTypes';
import { getUsers } from '../../api';
import { IUser } from '../../types/interfaces';

export const loadUsers = () => {
  return async (dispatch: any) => {
    // dispatch(beginApiCall());
		const { data: { results: users } }: { data: { results: IUser[] } } = await getUsers();
    dispatch({ type: LOAD_USERS, payload: users });
  };
};
