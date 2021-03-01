import React from 'react';
import Todos from './components/Todos'
import TodoInput from './components/TodoInput'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


export default function App() {
  return (
    <Provider store={store}>
      <TodoInput /> 
      <Todos />
    </Provider>
  );
}


