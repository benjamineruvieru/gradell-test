import {StyleSheet, View} from 'react-native';
import React from 'react';
import {RegularTextB} from 'components/Text';
import Colors from 'constants/Colors';

const PageHeader: React.FC<{title: string}> = ({title}) => {
  return (
    <View style={styles.mainView}>
      <RegularTextB>{title}</RegularTextB>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
  },
});
