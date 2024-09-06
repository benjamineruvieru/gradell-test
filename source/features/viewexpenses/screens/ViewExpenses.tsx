import {StyleSheet, View} from 'react-native';
import React from 'react';
import Mainbackground from 'components/Mainbackground';
import PageHeader from '../components/PageHeader';
import {MediumText} from 'components/Text';

const ViewExpenses = () => {
  return (
    <Mainbackground>
      <PageHeader />
      <View style={{padding: 20, flex: 1}}>
        <MediumText>Expenses</MediumText>
      </View>
    </Mainbackground>
  );
};

export default ViewExpenses;

const styles = StyleSheet.create({});
