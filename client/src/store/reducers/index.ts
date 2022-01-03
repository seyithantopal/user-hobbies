import { combineReducers } from 'redux';
import userReducer from './userReducer';
import hobbyReducer from './hobbyReducer';

const rootReducer = combineReducers({
  user: userReducer,
  hobby: hobbyReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
