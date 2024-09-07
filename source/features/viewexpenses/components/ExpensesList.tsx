import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Card from 'components/Card';
import {useMMKVObject} from 'react-native-mmkv';
import {RegularText, SmallText} from 'components/Text';
import {Expense} from 'features/addexpenses/screens/AddExpenses';
import {FlashList} from '@shopify/flash-list';
import ExpensesListHead from './ExpensesListHead';
import {
  formatNumberWithCommas,
  getPercentHeight,
} from 'utilis/helper_functions';
import Colors from 'constants/Colors';

type RenderExpenseProps = {
  item: Expense;
  index: number;
  deleteExpense: (index: number) => void;
};

const RenderExpense: React.FC<RenderExpenseProps> = ({
  item,
  deleteExpense,
  index,
}) => {
  const {
    amount,
    category: {color, category},
    name,
    description,
  } = item;

  const handleDelete = () => {
    deleteExpense(index);
  };

  const styles = StyleSheet.create({
    categoryItem: {
      paddingHorizontal: 13,
      paddingVertical: 8,
      borderRadius: 360,
      backgroundColor: color,
      alignSelf: 'flex-start',
    },
    categoryView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
  return (
    <View style={{padding: 20, gap: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <RegularText>{name}</RegularText>
        <RegularText>₦{formatNumberWithCommas(parseFloat(amount))}</RegularText>
      </View>
      <View style={styles.categoryView}>
        <View style={[styles.categoryItem]}>
          <SmallText>{category}</SmallText>
        </View>
        <SmallText onPress={handleDelete} color="red">
          Delete
        </SmallText>
      </View>
      {description && <SmallText>{description}</SmallText>}
    </View>
  );
};

const ExpensesList = () => {
  const [expenses, setExpenses] = useMMKVObject<Expense[]>('expenses');
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);
  const [shouldFilter, setShouldFilter] = useState(false);

  const deleteExpense = (index: number) => {
    if (expenses) {
      const updatedExpenses = expenses.filter((_, i) => i !== index);
      setExpenses(updatedExpenses);
    }
  };

  return (
    <Card>
      {!expenses || expenses?.length === 0 ? (
        <View style={styles.emptyView}>
          <SmallText>No expense created</SmallText>
        </View>
      ) : (
        <View style={styles.listView}>
          <ExpensesListHead
            {...{expenses, setShouldFilter, setFilteredExpenses}}
          />
          <FlashList
            showsVerticalScrollIndicator={false}
            estimatedItemSize={124}
            data={shouldFilter ? filteredExpenses : expenses.reverse()}
            renderItem={({item, index}) => (
              <RenderExpense
                index={index}
                item={item}
                deleteExpense={deleteExpense}
              />
            )}
            ListEmptyComponent={() => (
              <View style={styles.emptyList}>
                <SmallText>
                  No expenses found for the selected category
                </SmallText>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.line} />}
          />
        </View>
      )}
    </Card>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  emptyView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  listView: {
    flex: 1,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.borderColor,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: getPercentHeight(70),
  },
});
