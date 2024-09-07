import {StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';
import Colors from 'constants/Colors';

interface CardProps {
  children: ReactNode;
  marginBottom?: number;
  marginTop?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  marginBottom = 15,
  marginTop = 15,
}) => {
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
