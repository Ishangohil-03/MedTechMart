// src/components/organisms/RegisterForm.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormField from '../molecules/FormField';
import ImagePicker from '../atoms/ImagePicker';
import { SIZES } from '../atoms/theme'; // Import specific constants if needed

interface RegisterFormProps {
  username: string;
  setUsername: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  email: string;
  setEmail: (text: string) => void;
  phoneNumber: string;
  setPhoneNumber: (text: string) => void;
  address: string;
  setAddress: (text: string) => void;
  city: string;
  setCity: (text: string) => void;
  state: string;
  setState: (text: string) => void;
  zipCode: string;
  setZipCode: (text: string) => void;
  countryCode: string;
  setCountryCode: (text: string) => void;
  profilePhoto: string | null;
  onSelectPhoto: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  username,
  setUsername,
  password,
  setPassword,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  address,
  setAddress,
  city,
  setCity,
  state,
  setState,
  zipCode,
  setZipCode,
  countryCode,
  setCountryCode,
  profilePhoto,
  onSelectPhoto,
}) => {
  return (
    <View style={styles.form}>
      <ImagePicker imageUri={profilePhoto} onSelectImage={onSelectPhoto} />
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
      <FormField
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        error="Incorrect email address"
      />
      <FormField
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />
      <FormField
        label="Country Code"
        value={countryCode}
        onChangeText={setCountryCode}
        placeholder="e.g., +1"
        keyboardType="phone-pad"
      />
      <FormField
        label="Address"
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
      />
      <FormField
        label="City"
        value={city}
        onChangeText={setCity}
        placeholder="Enter your city"
      />
      <FormField
        label="State"
        value={state}
        onChangeText={setState}
        placeholder="Enter your state"
      />
      <FormField
        label="Zip Code"
        value={zipCode}
        onChangeText={setZipCode}
        placeholder="Enter your zip code"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
  },
});

export default RegisterForm;
