import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ViewExpenses from 'features/viewexpenses/screens/ViewExpenses';
import AddExpenses from 'features/addexpenses/screens/AddExpenses';

export type StackParamList = {
  ViewExpenses: undefined;
  AddExpenses: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNav: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="ViewExpenses" component={ViewExpenses} />
      <Stack.Screen name="AddExpenses" component={AddExpenses} />
    </Stack.Navigator>
  );
};

export default StackNav;
