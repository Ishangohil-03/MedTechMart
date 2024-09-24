import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../auth/login'; // Ensure the correct path to your LoginScreen
import Register from '../auth/register'; // Ensure the correct path to your RegisterScreen

// Define the types for the stack navigator parameters
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

// Create the stack navigator with the defined parameter list
const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: 'Register' }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
