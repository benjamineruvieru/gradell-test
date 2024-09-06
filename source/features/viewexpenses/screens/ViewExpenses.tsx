import {StyleSheet, View} from 'react-native';
import React from 'react';
import Mainbackground from 'components/Mainbackground';
import PageHeader from '../components/PageHeader';
import {MediumText, SmallText} from 'components/Text';
import Card from 'components/Card';
import {useMMKVObject} from 'react-native-mmkv';
import AddExpensesButton from '../components/AddExpensesButton';

const ViewExpenses = () => {
  const [expenses] = useMMKVObject('expenses');
  console.log('expenses', expenses);
  return (
    <Mainbackground>
      <PageHeader />
      <View style={styles.body}>
        <View style={styles.menuView}>
          <View>
            <MediumText>Expenses</MediumText>
            <SmallText>View your saved expenses</SmallText>
          </View>
          <AddExpensesButton />
        </View>
        <Card></Card>
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
