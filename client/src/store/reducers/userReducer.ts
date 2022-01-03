import { IUser, IAction } from '../../types/interfaces';
import { LOAD_USERS, CREATE_USER } from '../actions/actionTypes';

type State = {
  users: IUser[];
  isLoading: boolean;
};

const initialState: State = {
  users: [],
  isLoading: false,
};

const userReducer = (state = initialState, action: IAction<IUser>) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, users: action.payload };
    case CREATE_USER:
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};
export default userReducer;
