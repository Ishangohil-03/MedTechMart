// src/components/pages/RegisterScreen.tsx

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import RegisterForm from '../../components/organisms/RegisterForm';
import Button from '../../components/atoms/Buttons';
import { registerUser } from '../../utils/api';
import { AuthStackParamList } from '../../navigation/AuthStack';
import { COLORS, SIZES } from '../../components/atoms/Theme'; // Import from theme.tsx
import Loader from '../../components/atoms/Loader'; // If using Loader

type RegisterScreenProps = NativeStackScreenProps<AuthStackParamList, 'Register'>;

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  // State for form fields
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('+1');
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // For loader

  // Handle form submission
  const handleRegister = async () => {
    // Validate required fields
    if (
      !username ||
      !password ||
      !email ||
      !phoneNumber ||
      !address ||
      !city ||
      !state ||
      !zipCode ||
      !countryCode
    ) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    setIsLoading(true); // Show loader

    try {
      const data = await registerUser(
        username,
        password,
        email,
        phoneNumber,
        address,
        city,
        state,
        zipCode,
        countryCode,
        profilePhoto
      );
      Alert.alert('Success', 'Registration successful!');
      navigation.navigate('Login');
    } catch (error: any) {
      console.error('Error registering:', error);
      Alert.alert(
        'Error',
        error.response?.data?.message || 'Failed to register. Please try again.'
      );
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  // Handle profile photo selection
  const handleSelectPhoto = (uri: string) => {
    setProfilePhoto(uri);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RegisterForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        address={address}
        setAddress={setAddress}
        city={city}
        setCity={setCity}
        state={state}
        setState={setState}
        zipCode={zipCode}
        setZipCode={setZipCode}
        countryCode={countryCode}
        setCountryCode={setCountryCode}
        profilePhoto={profilePhoto}
        onSelectPhoto={handleSelectPhoto}
      />
      <Button title="Register" onPress={handleRegister} />
      <Button
        title="Back to Login"
        onPress={() => navigation.navigate('Login')}
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

export default RegisterScreen;
