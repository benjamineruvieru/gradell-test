import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AddSvg from 'svg/icon/add.svg';
import {useNavigation} from '@react-navigation/native';

const AddExpensesButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AddExpenses');
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <AddSvg />
    </TouchableOpacity>
  );
};

export default AddExpensesButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 360,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
