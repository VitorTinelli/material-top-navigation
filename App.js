import * as React from 'react';
import {
  createStaticNavigation,
} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SaldoScreen from './src/screens/SaldoScreen';
import CartoesScreen from './src/screens/CartoesScreen';

const MyTabs = createMaterialTopTabNavigator({
  screenOptions: {
    tabBarStyle: {
      backgroundColor: '#ffffff',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 1,
      borderBottomColor: '#f0f0f0',
    },
    tabBarIndicatorStyle: {
      backgroundColor: '#ff7a00',
      height: 3,
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    },
    tabBarActiveTintColor: '#1a1a1a',
    tabBarInactiveTintColor: '#8b8b8b',
    tabBarLabelStyle: {
      fontWeight: '700',
      textTransform: 'none',
      fontSize: 14,
    },
  },
  screens: {
    Saldo: SaldoScreen,
    Cartoes: CartoesScreen,
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return <Navigation />;
}