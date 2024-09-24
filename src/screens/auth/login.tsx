// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/AuthStack';
import { loginUser } from '../../../utils/api'; // Import loginUser function

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('testuser');
  const [password, setPassword] = useState<string>('testpassword');

  const handleLogin = async () => {
    console.log("Checking")
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      const data = await loginUser(username, password);
      console.log("This is test", data)
      // Handle successful login
      console.log('Login successful', data);
      Alert.alert('Success', 'Login successful!');
      // Navigate to the main app screen
      // navigation.replace('MainApp'); // Uncomment and use this if you have a 'MainApp' stack

    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'Invalid credentials. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
