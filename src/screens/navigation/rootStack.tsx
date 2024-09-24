import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './mainStack'; // Make sure the path to AuthStack is correct
// import MainStack from './mainStack'; // Make sure the path to MainAppStack is correct

// Define the types for the root stack navigator
export type RootStackParamList = {
    Auth: undefined;
    // MainStack: undefined;
};

// Create the root stack navigator
const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator: React.FC = () => {
    // Add your authentication state logic here
    const isLoggedIn = false; // This is just a placeholder; use your actual auth logic

    return (
        <NavigationContainer>
            <RootStack.Navigator>
                {/* {isLoggedIn ? (
          <RootStack.Screen
            name="MainStack"
            component={MainStack} // Main application screens for authenticated users
            options={{ headerShown: false }}
          />
        ) : 
        (
          <RootStack.Screen
            name="Auth"
            component={AuthStack} // Authentication screens for non-authenticated users
            options={{ headerShown: false }}
          />
        )
        } */}

                <RootStack.Screen
                    name="Auth"
                    component={AuthStack} // Authentication screens for non-authenticated users
                    options={{ headerShown: false }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default RootStackNavigator;
