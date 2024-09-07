import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {expenseCategories, SCREEN_WIDTH} from 'constants/Variables';
import {SmallText} from 'components/Text';

export interface Category {
  category: string;
  color: string;
}

interface CategoryOverlayProps {
  onSelect: (selectedCategory: Category) => void;
  style?: ViewStyle;
}

const CategoryOverlay: React.FC<CategoryOverlayProps> = ({onSelect, style}) => {
  const [height, setHeight] = useState(0);

  const onLayout = (e: LayoutChangeEvent) => {
    setHeight(e.nativeEvent.layout.height);
  };
  const styles = StyleSheet.create({
    overlay: {
      position: 'absolute',
      bottom: -height,
      backgroundColor: 'white',
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderRadius: 10,
      padding: 15,
      gap: 10,
      zIndex: 1,
      maxWidth: '100%',

      ...style,
    },
    categoryItem: {
      paddingHorizontal: 13,
      paddingVertical: 8,
      borderRadius: 360,
    },
  });
  return (
    <View onLayout={onLayout} style={styles.overlay}>
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
  );
};

export default CategoryOverlay;
