import {StyleSheet, View} from 'react-native';
import React from 'react';
import Mainbackground from 'components/Mainbackground';
import {MediumText, SmallText} from 'components/Text';
import Card from 'components/Card';
import {useMMKVObject} from 'react-native-mmkv';
import AddExpensesButton from '../components/AddExpensesButton';
import PageHeader from 'components/PageHeader';
import ExpensesList from '../components/ExpensesList';

const ViewExpenses = () => {
  return (
    <Mainbackground>
      <PageHeader title={'Expenser'} />
      <View style={styles.body}>
        <View style={styles.menuView}>
          <View>
            <MediumText>Expenses</MediumText>
            <SmallText>View your saved expenses</SmallText>
          </View>
          <AddExpensesButton />
        </View>
        <ExpensesList />
      </View>
    </Mainbackground>
  );
};

export default ViewExpenses;

const styles = StyleSheet.create({
  body: {padding: 20, flex: 1, paddingBottom: 0},
  menuView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
