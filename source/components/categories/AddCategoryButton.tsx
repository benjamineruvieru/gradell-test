import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RegularText, SmallText} from 'components/Text';
import Colors from 'constants/Colors';

const AddCategoryButton = () => {
  return (
    <View>
      <RegularText style={{marginBottom: 8}}>Category</RegularText>
      <TouchableOpacity style={styles.selectButton}>
        <SmallText>Select a category</SmallText>
      </TouchableOpacity>
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
