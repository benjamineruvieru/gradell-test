import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Mainbackground from 'components/Mainbackground';
import PageHeader from 'components/PageHeader';
import Input, {TextField} from 'components/Input';
import Button from 'components/Button';
import AddCategoryButton from 'components/categories/AddCategoryButton';

const AddExpenses = () => {
  return (
    <Mainbackground>
      <PageHeader title={'Add Expense'} />
      <View style={styles.body}>
        <Input placeholderText="Name" />
        <Input placeholderText="Amount" />
        <AddCategoryButton />
        <TextField placeholderText="Description" />
        <Button title="Save" />
      </View>
    </Mainbackground>
  );
};

export default AddExpenses;

const styles = StyleSheet.create({
  body: {flex: 1, padding: 20},
});
