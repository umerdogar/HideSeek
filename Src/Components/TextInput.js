import React from 'react';
import {Text, View, TextInput} from 'react-native';

const TextInputCustom = ({
  onChangeText,
  value,
  width,
  marginTop,
  PlaceHolder,
  borderRadius,
  borderWidth,
  hidePass,
}) => {
  return (
    <TextInput
      secureTextEntry={hidePass}
      onChangeText={onChangeText}
      placeholder={PlaceHolder}
      value={value}
      style={{
        marginTop: marginTop,
        paddingLeft: 15,
        fontSize: 17,
        width: width,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#DDDFE2',
        color: 'black',
      }}></TextInput>
  );
};

export default TextInputCustom;
