import React from 'react';
import RootStackNavigator from './src/screens/navigation/rootStack'; // Ensure the correct path to RootStack
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/screens/navigation/authStack';

const App: React.FC = () => {
  // return <RootStackNavigator />;
  return(
  <NavigationContainer>
  <AuthStack />
</NavigationContainer>
  )
};

export default App;
