import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';
import {expenseCategories} from 'constants/Variables';
import {SmallText} from 'components/Text';
import Colors from 'constants/Colors';
import {ScrollView} from 'react-native-gesture-handler';

export interface Category {
  category: string;
  color: string;
}

interface CategoryOverlayProps {
  onSelect: (selectedCategory: Category) => void;
  style?: ViewStyle;
}

const CategoryOverlay: React.FC<CategoryOverlayProps> = ({onSelect, style}) => {
  const styles = StyleSheet.create({
    overlay: {
      position: 'absolute',
      bottom: -300,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 15,
      zIndex: 1,
      maxWidth: '100%',
      elevation: 5,
      shadowColor: 'black',
      shadowOffset: {height: 1, width: 1},
      shadowOpacity: 0.2,
      shadowRadius: 5,
      borderWidth: 1,
      borderColor: Colors.borderColor,
      height: 300,
      ...style,
    },
    view: {flexDirection: 'row', flexWrap: 'wrap', gap: 10},
    categoryItem: {
      paddingHorizontal: 13,
      paddingVertical: 8,
      borderRadius: 360,
    },
  });
  return (
    <View style={styles.overlay}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.view}>
          {expenseCategories.map(({category, color}) => (
            <TouchableOpacity
              key={category}
              onPress={() => {
                onSelect({category, color});
              }}
              style={[styles.categoryItem, {backgroundColor: color}]}>
              <SmallText>{category}</SmallText>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryOverlay;
