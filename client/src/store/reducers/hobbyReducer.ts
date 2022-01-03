import { IAction, IHobby } from '../../types/interfaces';
import { CREATE_HOBBY, LOAD_HOBBIES } from '../actions/actionTypes';

type State = {
  hobbies: IHobby[];
  isLoading: boolean;
};

const initialState: State = {
  hobbies: [],
  isLoading: false,
};

const hobbyReducer = (state = initialState, action: IAction<IHobby>) => {
  switch (action.type) {
    case LOAD_HOBBIES:
      return { ...state, hobbies: action.payload };
    case CREATE_HOBBY:
      return { ...state, hobbies: [...state.hobbies, action.payload] };
    default:
      return state;
  }
};
export default hobbyReducer;
