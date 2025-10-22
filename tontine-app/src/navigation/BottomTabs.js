import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import WalletScreen from '../screens/WalletScreen';
import CreditScreen from '../screens/CreditScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
      }} />
      <Tab.Screen name="Wallet" component={WalletScreen} options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="wallet" color={color} size={size} />,
      }} />
      <Tab.Screen name="Credit" component={CreditScreen} options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="cash" color={color} size={size} />,
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
      }} />
    </Tab.Navigator>
  );
}
