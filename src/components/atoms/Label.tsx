// src/components/atoms/Label.tsx

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../atoms/Theme'; // Import from theme.tsx

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return <Text style={styles.label}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: SIZES.font,
    fontWeight: '500',
    marginBottom: SIZES.base / 2,
    color: COLORS.txt,
    fontFamily: FONTS.medium,
  },
});

export default Label;
