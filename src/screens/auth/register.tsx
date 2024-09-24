// screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/AuthStack';
import { registerUser } from '../../../utils/api'; // Import registerUser function

type RegisterScreenProps = NativeStackScreenProps<AuthStackParamList, 'Register'>;

const Register: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('testuser');
  const [password, setPassword] = useState<string>('testpassword');
  const [email, setEmail] = useState<string>('testuser@example.com');

  const handleRegister = async () => {
    if (!username || !password || !email) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      const data = await registerUser(username, password, email);
      console.log("This is register Screen log", data)
      // Handle successful registration
      console.log('Registration successful', data);
      Alert.alert('Success', 'Registration successful! Please log in.');
      // Navigate back to the login screen
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error registering:', error);
      Alert.alert('Error', 'Failed to register. Please try again.');
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
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Button title="Register" onPress={handleRegister} />
      <Button
        title="Back to Login"
        onPress={() => navigation.navigate('Login')}
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

export default Register;
