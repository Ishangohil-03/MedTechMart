// src/components/atoms/Loader.tsx

import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { COLORS, SIZES } from '../atoms/Theme'; // Importing from your theme file

interface LoaderProps {
  size?: 'small' | 'large'; // Optional size prop, defaults to 'large'
  color?: string; // Optional color prop, defaults to primary color
  message?: string; // Optional message to show with the loader
}

const Loader: React.FC<LoaderProps> = ({
  size = 'large', // Default size is 'large'
  color = COLORS.primary, // Default color is from the theme
  message = '', // Optional message
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)', // Transparent overlay
  },
  message: {
    marginTop: SIZES.base,
    fontSize: SIZES.font,
    color: COLORS.txt,
    fontFamily: 'System', // Or use your custom font from the theme
  },
});

export default Loader;
