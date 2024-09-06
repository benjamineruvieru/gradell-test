import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, useState} from 'react';
import {RegularText} from './Text';
import Colors from '../constants/Colors';
import Eyeopen from '../assets/svg/input/eyeopen.svg';
import Eyeclose from '../assets/svg/input/eyeclosed.svg';

interface InputProps {
  style?: ViewStyle;
  bottom?: number;
  placeholder?: string;
  placeholderText?: string;
  inputStyle?: TextStyle;
  password?: boolean;
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
}

export const TextField: FC<InputProps> = ({
  style,
  bottom = 20,
  placeholder,
  placeholderText,
  inputStyle,
  password,
  keyboard = 'default',
  handleKeyPress,
  returnKeyType,
  onSubmitEditing,
  text,
  setText,
  maxLength,
  editable,
  testID,
  errors,
}) => {
  const [isFocused, setFocused] = useState(false);
  const errorMsg = errors?.[placeholderText];

  const [hide, setHide] = useState(password);

  const styles = StyleSheet.create({
    input: {
      color: 'black',
      flex: 1,
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
      height: 120,
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
          onBlur={() => {
            setFocused(false);
          }}
          onFocus={setFocused}
          testID={testID}
          editable={editable}
          maxLength={maxLength}
          value={text}
          cursorColor={Colors.primary}
          selectionColor={Colors.primary}
          onChangeText={setText}
          returnKeyType={returnKeyType}
          multiline={true}
          keyboardType={keyboard}
          secureTextEntry={hide}
          placeholder={placeholder}
          placeholderTextColor={'#FFFFFF50'}
          style={styles.input}
          onKeyPress={handleKeyPress}
          onSubmitEditing={onSubmitEditing}
        />
        {password && (
          <TouchableOpacity
            onPress={() => setHide(p => !p)}
            style={{marginRight: 5}}>
            {hide ? (
              <Eyeclose height={15} width={15} />
            ) : (
              <Eyeopen height={15} width={15} />
            )}
          </TouchableOpacity>
        )}
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
  password,
  keyboard = 'default',
  handleKeyPress,
  multiline,
  returnKeyType,
  onSubmitEditing,
  text,
  setText,
  maxLength,
  editable,
  testID,
  errors,
}) => {
  const [isFocused, setFocused] = useState(false);
  const errorMsg = errors?.[placeholderText];

  const [hide, setHide] = useState(password);

  const styles = StyleSheet.create({
    input: {
      color: 'black',
      flex: 1,
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
      height: 50,
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
      marginBottom: bottom,
      borderRadius: 5,
      paddingHorizontal: 15,
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
          onBlur={() => {
            setFocused(false);
          }}
          onFocus={setFocused}
          testID={testID}
          editable={editable}
          maxLength={maxLength}
          value={text}
          cursorColor={Colors.primary}
          selectionColor={Colors.primary}
          onChangeText={setText}
          returnKeyType={returnKeyType}
          multiline={multiline}
          keyboardType={keyboard}
          secureTextEntry={hide}
          placeholder={placeholder}
          placeholderTextColor={'#FFFFFF50'}
          style={styles.input}
          onKeyPress={handleKeyPress}
          onSubmitEditing={onSubmitEditing}
        />
        {password && (
          <TouchableOpacity
            onPress={() => setHide(p => !p)}
            style={{marginRight: 5}}>
            {hide ? (
              <Eyeclose height={15} width={15} />
            ) : (
              <Eyeopen height={15} width={15} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({});
