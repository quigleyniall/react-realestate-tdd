import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../store/rootReducer';

const middlewares = [thunk];

export const findByTestAttr = (wrapper, dataTestId) => {
  return wrapper.find(`[data-test="${dataTestId}"]`);
}

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}