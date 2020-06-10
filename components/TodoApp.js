import React, {useState, useCallback} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, Text} from 'react-native';

import Heading from './Heading';
import Input from './Input';

let todoIndex = 0;

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [todoType, setTodoType] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <Heading />
        <Input inputValue={inputValue} onInputChange={setInputValue} />
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
