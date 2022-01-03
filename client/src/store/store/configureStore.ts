import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState: any) {
  const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
}
