import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleRemove = () =>
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    });
    console.log(todos.length)
  if (!todos || !todos.length) {
    return <p>No Todos</p>;

  }
  return (
    <View>
      {todos.map((todo) => {
        console.log(todo)
      return( 
        <TouchableOpacity onPress={handleRemove}>
           <Text>{todo.label}</Text>
       </TouchableOpacity> 
      )
      })
      }
    </View>
  );
}
