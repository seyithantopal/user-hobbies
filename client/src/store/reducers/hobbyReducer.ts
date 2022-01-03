import { IAction, IHobby } from '../../types/interfaces';
import { LOAD_HOBBIES } from '../actions/actionTypes';

type State = {
  hobbies: IHobby[];
  isLoading: boolean;
};

const initialState: State = {
  hobbies: [],
  isLoading: false,
};

const userReducer = (state = initialState, action: IAction<IHobby>) => {
  switch (action.type) {
    case LOAD_HOBBIES:
      return { ...state, hobbies: action.payload };
    default:
      return state;
  }
};
export default userReducer;
