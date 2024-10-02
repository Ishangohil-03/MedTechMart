// src/App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootNavigator />  {/* Load the root navigator */}
    </NavigationContainer>
  );
};

export default App;
