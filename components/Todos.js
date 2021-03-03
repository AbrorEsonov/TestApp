import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeTodo} from '../actions';

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log('TODOS: ', todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => dispatch(removeTodo(id));

  return (
    <View>
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            todo.label.length > 0 &&
            <TouchableOpacity
              style={{marginLeft: 30}}
              key={todo.id}
              onPress={() => handleRemove(todo.id)}>
              <Text
                style={{
                  padding: 20,
                  borderWidth: 1,
                  marginTop: 10,
                  width: '80%',
                  backgroundColor: '#ccc',
                }}>
                {todo.label}
              </Text>
            </TouchableOpacity>
          );
        })
      ) : (
        <Text>Todo is empty</Text>
      )}
    </View>
  );
}
