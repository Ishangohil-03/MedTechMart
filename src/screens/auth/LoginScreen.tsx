// src/components/auth/LoginScreen.tsx

import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginForm from '../../components/organisms/LoginForm';
import { loginUser } from '../../utils/api';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const data = await loginUser(username, password);
      await AsyncStorage.setItem('token', data.token);  // Store the token
      navigation.navigate('Home');  // After login, navigate to the Home screen
    } catch (error) {
      Alert.alert('Login failed', 'Please check your credentials and try again.');
    }
  };

  return (
    <View style={styles.container}>
      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default LoginScreen;
