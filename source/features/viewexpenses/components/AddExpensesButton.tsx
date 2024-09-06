import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AddSvg from 'svg/icon/add.svg';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackParamList} from 'navigation/StackNav';

const AddExpensesButton: React.FC = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const onPress = () => {
    navigation.navigate('AddExpenses');
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <AddSvg width={30} height={30} />
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
