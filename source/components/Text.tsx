import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TouchableOpacity,
  TextStyle,
  LayoutChangeEvent,
} from 'react-native';
import Colors from '../constants/Colors';

interface TextProps {
  children: React.ReactNode;
  style?: TextStyle;
  onPress?: () => void;
  onTextPress?: () => void;
  disabled?: boolean;
  numLines?: number;
  dim?: boolean;
  props?: any;
  touchStyle?: any;
  onTextLayout?: () => void;
  color?: string;
  onLayout?: (event: LayoutChangeEvent) => void;
}

const Text: React.FC<TextProps> = ({
  children,
  style,
  onPress,
  onTextPress,
  disabled,
  numLines,
  dim,
  props,
  touchStyle,
  onTextLayout = () => {},
  color,
  onLayout,
}) => {
  const styles = StyleSheet.create({
    text: {
      color: dim ? Colors.dim : color ? color : 'black',
      includeFontPadding: false,
      ...style,
    },
  });

  return (
    <>
      {onPress ? (
        <TouchableOpacity
          style={{...touchStyle}}
          onPress={onPress}
          disabled={disabled ? disabled : !onPress}>
          <RNText onTextLayout={onTextLayout} style={styles.text} {...props}>
            {children}
          </RNText>
        </TouchableOpacity>
      ) : (
        <RNText
          onTextLayout={onTextLayout}
          onLayout={onLayout}
          {...props}
          numberOfLines={numLines}
          onPress={onTextPress}
          style={styles.text}>
          {children}
        </RNText>
      )}
    </>
  );
};

export const MediumText: React.FC<TextProps> = ({
  children,
  style,
  onPress,
  onTextPress,
  dim,
  numLines,
  onLayout,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 25,
      ...style,
    },
  });

  return (
    <Text
      dim={dim}
      numLines={numLines}
      onTextPress={onTextPress}
      onPress={onPress}
      onLayout={onLayout}
      style={styles.text}>
      {children}
    </Text>
  );
};

export const RegularTextB: React.FC<TextProps> = ({
  children,
  style,
  onPress,
  disabled,
  onTextPress,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Poppins-Bold',
      fontSize: 17,
      ...style,
    },
  });

  return (
    <Text
      disabled={disabled}
      onPress={onPress}
      onTextPress={onTextPress}
      style={styles.text}>
      {children}
    </Text>
  );
};

export const RegularText: React.FC<TextProps> = ({
  children,
  style,
  onPress,
  disabled,
  onTextPress,
  dim,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 15,
      ...style,
    },
  });

  return (
    <Text
      dim={dim}
      disabled={disabled}
      onPress={onPress}
      onTextPress={onTextPress}
      style={styles.text}>
      {children}
    </Text>
  );
};

export const SmallText: React.FC<TextProps> = ({
  children,
  style,
  onPress,
  disabled,
  onTextPress,
  dim,
  numLines,
  touchStyle,
  onTextLayout = () => {},
  color = 'black',
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Poppins-Regular',
      fontSize: 13,
      color,
      ...style,
    },
  });

  return (
    <Text
      onTextLayout={onTextLayout}
      numLines={numLines}
      dim={dim}
      disabled={disabled}
      onPress={onPress}
      onTextPress={onTextPress}
      touchStyle={touchStyle}
      style={styles.text}>
      {children}
    </Text>
  );
};
