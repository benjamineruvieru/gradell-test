import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, useState} from 'react';
import {RegularText, SmallText} from './Text';
import Colors from '../constants/Colors';

interface InputProps {
  style?: ViewStyle;
  bottom?: number;
  placeholder?: string;
  placeholderText?: string;
  inputStyle?: TextStyle;
  keyboard?: KeyboardTypeOptions;
  handleKeyPress?: (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => void | undefined;
  multiline?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: () => void;
  text: string;
  setText: (text: string) => void;
  maxLength?: number;
  editable?: boolean;
  testID?: string;
  errors?: {[key: string]: string};
  setErrors?: React.Dispatch<React.SetStateAction<{[key: string]: string}>>;
}

export const TextField: FC<InputProps> = ({
  style,
  bottom = 20,
  placeholder,
  placeholderText,
  inputStyle,
  keyboard = 'default',
  handleKeyPress,
  returnKeyType,
  onSubmitEditing,
  text,
  setText,
  maxLength,
  editable,
}) => {
  const [isFocused, setFocused] = useState(false);

  const styles = StyleSheet.create({
    input: {
      color: 'black',
      flex: 1,
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
      height: 120,
      textAlignVertical: 'top',
      padding: 0,
      ...inputStyle,
    },
    mainView: {
      alignItems: 'center',
      borderWidth: 2,
      borderColor: isFocused ? Colors.primary : Colors.borderColor,
      flexDirection: 'row',
      marginBottom: bottom,
      borderRadius: 5,
      paddingHorizontal: 15,
      paddingTop: 10,
      ...style,
    },
  });

  return (
    <>
      {placeholderText && (
        <RegularText style={{marginBottom: 8}}>{placeholderText}</RegularText>
      )}
      <View style={styles.mainView}>
        <TextInput
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          editable={editable}
          maxLength={maxLength}
          value={text}
          cursorColor={Colors.primary}
          selectionColor={Colors.primary}
          onChangeText={setText}
          returnKeyType={returnKeyType}
          multiline={true}
          keyboardType={keyboard}
          placeholder={placeholder}
          placeholderTextColor={'#FFFFFF50'}
          style={styles.input}
          onKeyPress={handleKeyPress}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    </>
  );
};

const Input: FC<InputProps> = ({
  style,
  bottom = 20,
  placeholder,
  placeholderText,
  inputStyle,
  keyboard = 'default',
  handleKeyPress,
  multiline,
  returnKeyType,
  onSubmitEditing,
  text,
  setText,
  maxLength,
  editable,
  errors,
  setErrors,
}) => {
  const [isFocused, setFocused] = useState(false);
  const errorMsg = errors?.[placeholderText || ''];

  const styles = StyleSheet.create({
    input: {
      color: 'black',
      flex: 1,
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
      height: 50,
      padding: 0,
      ...inputStyle,
    },
    mainView: {
      alignItems: 'center',
      borderWidth: 2,
      borderColor: errorMsg
        ? Colors.red
        : isFocused
        ? Colors.primary
        : Colors.borderColor,
      flexDirection: 'row',
      marginBottom: errorMsg ? 5 : bottom,
      borderRadius: 5,
      paddingHorizontal: 15,
      ...style,
    },
    errorText: {
      color: Colors.red,
      marginBottom: bottom,
    },
  });

  return (
    <>
      {placeholderText && (
        <RegularText
          style={{marginBottom: 8, color: errorMsg ? Colors.red : 'black'}}>
          {placeholderText}
        </RegularText>
      )}
      <View style={styles.mainView}>
        <TextInput
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          editable={editable}
          maxLength={maxLength}
          value={text}
          cursorColor={Colors.primary}
          selectionColor={Colors.primary}
          onChangeText={inputText => {
            if (setErrors) {
              setErrors(prev => {
                const newErrors = {...prev};
                delete newErrors[placeholderText || ''];
                return newErrors;
              });
            }
            setText(inputText);
          }}
          returnKeyType={returnKeyType}
          multiline={multiline}
          keyboardType={keyboard}
          placeholder={placeholder}
          placeholderTextColor={'#FFFFFF50'}
          style={styles.input}
          onKeyPress={handleKeyPress}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
      {errorMsg && <SmallText style={styles.errorText}>{errorMsg}</SmallText>}
    </>
  );
};

export default Input;
