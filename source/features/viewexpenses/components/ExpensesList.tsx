import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from 'components/Card';
import {useMMKVObject} from 'react-native-mmkv';

const ExpensesList = () => {
  const [expenses] = useMMKVObject('expenses');
  console.log('expenses', expenses);
  return <Card></Card>;
};

export default ExpensesList;

const styles = StyleSheet.create({});
