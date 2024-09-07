import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {RegularText, SmallText} from 'components/Text';
import {formatNumberWithCommas} from 'utilis/helper_functions';
import CategoryOverlay, {Category} from 'components/categories/CategoryOverlay';
import Colors from 'constants/Colors';
import {Expense} from 'features/addexpenses/screens/AddExpenses';

import FilterSvg from 'svg/icon/filter-square.svg';
import CloseSvg from 'svg/icon/close-circle.svg';

interface ExpensesListHeadProps {
  expenses: Expense[];
  setFilteredExpenses: (expenses: Expense[]) => void;
  setShouldFilter: (shouldFilter: boolean) => void;
}

const ExpensesListHead: React.FC<ExpensesListHeadProps> = ({
  expenses = [],
  setFilteredExpenses,
  setShouldFilter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>();
  const totalAmount = expenses.reduce(
    (total, expense) => total + parseInt(expense.amount, 10),
    0,
  );

  const [open, setOpen] = useState(false);

  const onSelect = (selectedCategory: Category) => {
    const filtered = expenses
      .filter(
        expense => expense.category.category === selectedCategory.category,
      )
      .reverse();
    setSelectedCategory(selectedCategory);
    setFilteredExpenses(filtered);
    setShouldFilter(true);
    setOpen(false);
  };

  const toggleOpen = () => {
    setOpen(prev => !prev);
  };

  const clearFilter = () => {
    setSelectedCategory(null);
    setShouldFilter(false);
  };

  return (
    <>
      <View style={styles.mainView}>
        <RegularText>Total: ₦{formatNumberWithCommas(totalAmount)}</RegularText>

        <TouchableOpacity onPress={toggleOpen}>
          {selectedCategory ? (
            <View style={styles.selectedCategoryView}>
              <SmallText>{selectedCategory.category}</SmallText>
              <TouchableOpacity onPress={clearFilter}>
                <CloseSvg color={'black'} width={20} height={20} />
              </TouchableOpacity>
            </View>
          ) : (
            <FilterSvg />
          )}
        </TouchableOpacity>
      </View>
      {open && (
        <CategoryOverlay
          style={{right: 0, top: 60, bottom: null}}
          onSelect={onSelect}
        />
      )}
    </>
  );
};

export default ExpensesListHead;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.borderColor,
  },
  selectedCategoryView: {flexDirection: 'row', alignItems: 'center', gap: 5},
});
