import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';

import Counter from './Counter';
import reducer from './reducers';

const store = configureStore({ reducer });

const action = (type) => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
    />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
