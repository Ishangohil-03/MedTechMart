// src/components/atoms/TextInput.tsx

import React from 'react';
import { TextInput as RNTextInput, StyleSheet, TextInputProps } from 'react-native';
import { COLORS, SIZES, FONTS } from '../atoms/Theme'; // Import from theme.tsx

interface TextInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChangeText, placeholder, ...props }) => {
  return (
    <RNTextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#666"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.base,
    marginVertical: SIZES.margin / 2,
    fontSize: SIZES.font,
    color: COLORS.txt,
    backgroundColor: COLORS.surface,
    fontFamily: FONTS.regular,
  },
});

export default TextInput;
