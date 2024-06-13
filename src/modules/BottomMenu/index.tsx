import Square from '@Components/Icons';
import { COLORS } from '@Constants/style.constants';
import Chart from '@Screens/Chart';
import Data from '@Screens/Data';
import Market from '@Screens/Market';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES, TabBarStackParamList } from '@routes';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator<TabBarStackParamList>();

const BottomMenu: FC = () => {

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ADADAD',
          tabBarStyle: styles.tabBar,
          headerShown: false,
          tabBarIcon: props => <Square {...props} />,
          tabBarHideOnKeyboard: true
        }}>
        <Tab.Screen name={ROUTES.MARKET} component={Market} />
        <Tab.Screen name={ROUTES.DATA} component={Data} />
        <Tab.Screen name={ROUTES.CHART} component={Chart} />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    backgroundColor: COLORS.HeavyMetal,
    paddingBottom: 10,
    height: 60
    
  },
});

export default BottomMenu;
