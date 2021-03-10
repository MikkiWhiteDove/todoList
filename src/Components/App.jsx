import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers/index';

import Head from './Head';
import AddItem from '../Containers/AddItem';
import TaskList from '../Containers/TaskList';

const localStorageMiddleware = ({ getState }) => next => action => {
  const res = next(action);
  if ([action.type].includes(res.type)) {
    localStorage.setItem('data', JSON.stringify(getState().todos));
  }
  return res;
};

export const store = createStore(rootReducer, applyMiddleware(localStorageMiddleware));

const App = () => (
  <>
    <Provider store={store}>
      <Head />
      <AddItem />
      <TaskList />
    </Provider>
  </>
);

export default App;
