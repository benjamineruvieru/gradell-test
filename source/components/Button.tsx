import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {SmallText} from './Text';
import Colors from '../constants/Colors';
import {getPercentWidth} from '../utilis/helper_functions';
import {isPhone} from '../constants/Variables';

interface ButtonProps {
  title: string;
  width?: number;
  style?: ViewStyle;
  onPress?: () => void;
  backgroundColor?: string;
  bottom?: number;
  top?: number;
  small?: boolean;
  disable?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  width = isPhone ? 90 : 96,
  style,
  onPress,
  backgroundColor = Colors.primary,
  bottom = 0,
  top = 0,
  small,
  disable,
}) => {
  const styles = StyleSheet.create({
    bg: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor,
      borderColor: Colors.primary,
      borderRadius: small ? 5 : 8,
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: bottom,
      marginTop: top,
      opacity: disable ? 0.5 : 1,
      padding: small ? 8 : 20,
      width: getPercentWidth(width),
      ...style,
    },
  });

  return (
    <TouchableOpacity disabled={disable} style={styles.bg} onPress={onPress}>
      <SmallText
        style={{
          color: 'white',
          fontFamily: 'Poppins-SemiBold',
          fontSize: 13,
        }}>
        {title}
      </SmallText>
    </TouchableOpacity>
  );
};

export default Button;
