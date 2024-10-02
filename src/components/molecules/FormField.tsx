// src/components/molecules/FormField.tsx

import React from 'react';
import { View, StyleSheet, TextInputProps, Text } from 'react-native';
import Label from '../atoms/Label';
import TextInput from '../atoms/TextInput';
import { COLORS, FONTS, SIZES } from '../atoms/Theme'

interface FormFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  error?: string; // New prop for error messages
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  error
}) => {
  return (
    <View style={styles.container}>
      <Label text={label} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16, // Consider using theme constants here
  },
  errorText: {
    color: COLORS.error,
    fontSize: SIZES.font * 0.8,
    marginTop: 4,
    fontFamily: FONTS.regular,
  },
});

export default FormField;
