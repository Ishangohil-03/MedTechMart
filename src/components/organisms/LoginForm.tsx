// src/components/organisms/LoginForm.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormField from '../molecules/FormField';
import { SIZES } from '../atoms/Theme'; // Import specific constants if needed

interface LoginFormProps {
  username: string;
  setUsername: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <View style={styles.form}>
      <FormField
        label="Username"
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
        
      />
      <FormField
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
    marginBottom: SIZES.margin, // Optional: Add spacing below the form
  },
});

export default LoginForm;
