import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import ScoreDetailScreen from './src/screens/ScoreDetailScreen';
import TontineDetailScreen from './src/screens/TontineDetailScreen';
import WalletScreen from './src/screens/WalletScreen';
import CreditScreen from './src/screens/CreditScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import CreateGroupeScreen from './src/screens/CreateGroupeScreen';
import JoinGroupeScreen from './src/screens/JoinGroupeScreen';
import { AuthOTPScreen } from './src/screens/AuthOTPScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='ScoreDetail' component={ScoreDetailScreen}/>
        <Stack.Screen name='Tontine' component={TontineDetailScreen}/>
        <Stack.Screen name='Wallet' component={WalletScreen}/>
        <Stack.Screen name='Credit' component={CreditScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Notifications' component={NotificationsScreen}/>
        <Stack.Screen name='Dashboard' component={DashboardScreen}/>        
        <Stack.Screen name='CreateGroupe' component={CreateGroupeScreen}/>        
        <Stack.Screen name='JoinGroupe' component={JoinGroupeScreen}/>        
        <Stack.Screen name='AuthOTPS' component={AuthOTPScreen}/>     
        {/* <Stack.Screen name='ScoreDetail' component={ScoreDetailScreen}/>      */}
        
        {/* Tu ajouteras ici Dashboard, Wallet, etc. plus tard */}
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}
