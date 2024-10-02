// src/components/pages/LoginScreen.tsx

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LoginForm from '../../components/organisms/LoginForm';
import Button from '../../components/atoms/Buttons';
import { loginUser } from '../../utils/api';
import { AuthStackParamList } from '../../navigation/AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, SIZES } from '../../components/atoms/Theme'; // Import from theme.tsx
import Loader from '../../components/atoms/Loader'; // If using Loader

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  // State for form fields
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false); // For loader

  // Handle form submission
  const handleLogin = async () => {
    // Validate required fields
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    setIsLoading(true); // Show loader

    try {
      const data = await loginUser(username, password);
      Alert.alert('Success', 'Login successful!');
      // Store token securely (consider using a more secure storage solution)
      await AsyncStorage.setItem('token', data.token);
      navigation.navigate('Home'); // Navigate to the main app screen
    } catch (error: any) {
      console.error('Error logging in:', error);
      Alert.alert(
        'Error',
        error.response?.data?.message || 'Failed to login. Please try again.'
      );
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
        backgroundColor="#AAAAAA"
        textColor={COLORS.txt}
      />
      {isLoading && <Loader />} {/* Show loader when isLoading is true */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: SIZES.padding,
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
});

export default LoginScreen;
