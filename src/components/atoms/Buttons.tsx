// src/components/atoms/Button.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { COLORS, SIZES, FONTS } from '../atoms/Theme'; // Import from theme.tsx

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, backgroundColor = COLORS.primary, textColor = COLORS.onPrimary }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    marginVertical: SIZES.margin / 2,
  },
  buttonText: {
    fontSize: SIZES.font,
    fontWeight: '600',
    fontFamily: FONTS.bold,
  },
});

export default Button;
