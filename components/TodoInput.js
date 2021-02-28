import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';

export default function TodoInput() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setNewTodo(e.target.value)
  }
  
  const handleInputClick = () => 
   dispatch({
    type: 'ADD_TODO',
    payload: {
      label: newTodo,
      id: Math.ceil(Math.random() * 100)
    },
  })
  console.log("salom")
  return (
    <View>
      <TextInput type="text" value={newTodo} onChangeText={handleInputChange} />
      <Button title="ADD TODO" onPress={handleInputClick} />
    </View>
  );
}


