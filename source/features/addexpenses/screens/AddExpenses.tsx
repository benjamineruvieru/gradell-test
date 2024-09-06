import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Mainbackground from 'components/Mainbackground';
import PageHeader from 'components/PageHeader';
import Input, {TextField} from 'components/Input';
import Button from 'components/Button';
import AddCategoryButton from 'components/categories/AddCategoryButton';
import {showNotification} from 'utilis/helper_functions';
import {useMMKVObject} from 'react-native-mmkv';
import {Category} from 'components/categories/CategoryOverlay';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackParamList} from 'navigation/StackNav';

interface Expense {
  name: string;
  amount: string;
  category: Category;
  description?: string;
}

const AddExpenses: React.FC = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<Category | null>(null);
  const [description, setDescription] = useState<string>('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [expenses, setExpenses] = useMMKVObject<Expense[]>('expenses');

  const onPress = () => {
    const newErrors: {[key: string]: string} = {};

    if (!name) {
      newErrors['Name'] = 'Name is required';
    }
    if (!amount) {
      newErrors['Amount'] = 'Amount is required';
    }
    if (!category) {
      showNotification({error: true, msg: 'Please select a category'});
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (name && amount && category) {
      const newExpense: Expense = {name, amount, category, description};
      setExpenses([...(expenses || []), newExpense]);
      showNotification({msg: 'Expense added successfully'});
      navigation.goBack();
    }
  };

  return (
    <Mainbackground keyboard avoid>
      <PageHeader title={'Add Expense'} />
      <ScrollView style={styles.body}>
        <Input
          placeholderText="Name"
          text={name}
          setText={setName}
          errors={errors}
          setErrors={setErrors}
        />
        <Input
          placeholderText="Amount"
          text={amount}
          setText={setAmount}
          errors={errors}
          setErrors={setErrors}
          keyboard="numeric"
        />
        <AddCategoryButton {...{category, setCategory}} />
        <TextField
          placeholderText="Description"
          text={description}
          setText={setDescription}
          errors={errors}
          setErrors={setErrors}
        />
        <Button title="Save" onPress={onPress} />
      </ScrollView>
    </Mainbackground>
  );
};

export default AddExpenses;

const styles = StyleSheet.create({
  body: {flex: 1, padding: 20},
});
