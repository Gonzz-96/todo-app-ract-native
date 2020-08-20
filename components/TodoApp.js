import React, {useState, useCallback} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';

import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import Todo from './Todo';

let todoIndex = 0;

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [todoType, setTodoType] = useState('');

  const submitTodo = () => {
    if (inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    setTodos((current) => [...current, todo]);
    console.log(todos);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Heading />
        <Input inputValue={inputValue} onInputChange={setInputValue} />
        <FlatList
          data={todos}
          keyExtractor={(item) => item.todoIndex.toString()}
          renderItem={({item}) => <Todo todo={item} />} />
        <Button submitTodo={submitTodo} />
      </SafeAreaView>
    </View>
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
