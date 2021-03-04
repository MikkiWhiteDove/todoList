import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from '../store';
import { Home } from './home/index'

const App = ()  => {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  )
};

export default App;
