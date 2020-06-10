import React, {useState, useCallback} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, Text} from 'react-native';

import Heading from './Heading';
import Input from './Input';
import Button from './Button';

let todoIndex = 0;

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [todoType, setTodoType] = useState('');

  const submitTodo = useCallback(() => {
    if (inputValue.match(/^\s*$/)) {
      return
    }
    const todo = {
      title: inputValue,
      todoIndex,
      complete: false
    }
    todoIndex++;
    setTodos(current => [...current, todo]);
    console.log(todos)
  }, [todos])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <Heading />
        <Input inputValue={inputValue} onInputChange={setInputValue} />
        <Button submitTodo={submitTodo}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default TodoApp;
