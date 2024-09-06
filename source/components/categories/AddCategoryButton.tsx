import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {RegularText, SmallText} from 'components/Text';
import Colors from 'constants/Colors';
import CategoryOverlay, {Category} from './CategoryOverlay';

interface AddCategoryButtonProps {
  category: Category | null;
  setCategory: (category: Category) => void;
}

const AddCategoryButton: React.FC<AddCategoryButtonProps> = ({
  category,
  setCategory,
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(prev => !prev);
  };

  const onSelect = (data: Category) => {
    setOpen(false);
    setCategory(data);
  };
  return (
    <View style={{zIndex: 1}}>
      <RegularText style={{marginBottom: 8}}>Category</RegularText>
      <TouchableOpacity
        onPress={toggleOpen}
        style={[
          styles.selectButton,
          category && {backgroundColor: category.color},
        ]}>
        <SmallText>
          {category ? category.category : 'Select a category'}
        </SmallText>
      </TouchableOpacity>
      {open && <CategoryOverlay onSelect={onSelect} />}
    </View>
  );
};

export default AddCategoryButton;

const styles = StyleSheet.create({
  selectButton: {
    marginBottom: 15,
    backgroundColor: Colors.grey,
    borderRadius: 360,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
  },
});
