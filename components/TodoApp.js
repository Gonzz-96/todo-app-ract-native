import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, Text} from 'react-native';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValues, setInputValues] = useState('');
  const [todoType, setTodoType] = useState('');

  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={StyleSheet.content}></ScrollView>
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
