import { LOAD_USERS, CREATE_USER } from './actionTypes';
import { getUsersApi, createUserApi } from '../../api';
import { IUser } from '../../types/interfaces';

export const loadUsers = () => {
  return async (dispatch: any) => {
    // dispatch(beginApiCall());
    const { data: { results: users } }: { data: { results: IUser[] } } = await getUsersApi();
    dispatch({ type: LOAD_USERS, payload: users });
  };
};

export const createUser = (payload: any) => {
  return async (dispatch: any) => {
    const { data : { result } } = await createUserApi(payload);
    dispatch({ type: CREATE_USER, payload: result });
  };
};
