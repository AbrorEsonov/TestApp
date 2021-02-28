import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import Todos from './components/Todos'
import TodoInput from './components/TodoInput'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
// import {useDispatch, useSelector} from 'react-redux'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
