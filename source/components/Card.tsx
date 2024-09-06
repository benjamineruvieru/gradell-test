import {StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from 'constants/Colors';

const Card = ({children, marginBottom = 15, marginTop = 15}) => {
  const styles = StyleSheet.create({
    card: {
      borderWidth: 1,
      borderColor: Colors.borderColor,
      borderRadius: 15,
      flex: 1,
      marginBottom,
      marginTop,
    },
  });

  return <View style={styles.card}>{children}</View>;
};

export default Card;
