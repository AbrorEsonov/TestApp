import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import { addTodo } from '../actions';

export default function TodoInput() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    console.log('uuuu',e)
    setNewTodo(e);
  };
 
  const handleInputClick = () =>(
    dispatch(addTodo(newTodo)),
    setNewTodo('')
    );
    
  return (
    <View>
      <TextInput
        style={{
          borderWidth: 2,
          marginTop: 20,
          width: '60%',
          alignItems: 'center',
        }}
        value={newTodo}
        onChangeText={handleInputChange}
      />
      <Button title="ADD TODO" onPress={handleInputClick} />
    </View>
  );
}
