import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  ViewStyle,
  View,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface MainBackgroundProps {
  children: React.ReactNode;
  style?: ViewStyle;
  keyboard?: boolean;
  avoid?: boolean;
  top?: number;
  padding?: number;
  paddingBottom?: number;
  insetsBottom?: number;
  androidAvoid?: 'padding' | 'height' | 'position';
}

const Mainbackground: React.FC<MainBackgroundProps> = ({
  children,
  style,
  keyboard,
  avoid,
  top,
  padding,
  paddingBottom,
  insetsBottom,
  androidAvoid,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <Pressable
      disabled={!keyboard}
      onPress={() => Keyboard.dismiss()}
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding,
        paddingBottom,
      }}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <KeyboardAvoidingView
        keyboardVerticalOffset={-insets.bottom}
        behavior={avoid && Platform.OS === 'ios' ? 'padding' : androidAvoid}
        style={{
          flex: 1,
          paddingTop: top ? top : insets.top,
        }}>
        <View
          style={{
            flex: 1,
            paddingBottom: insetsBottom ? insetsBottom : insets.bottom,
            ...style,
          }}>
          {children}
        </View>
      </KeyboardAvoidingView>
    </Pressable>
  );
};

export default Mainbackground;
