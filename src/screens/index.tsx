import {COLORS} from '@Constants/style.constants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomMenu from '@Screens/screensTabBar/index';
import {RootStackParamList, ROUTES} from '@Types/routes';
import React from 'react';
import {StatusBar} from 'react-native';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.HeavyMetal} />
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name={ROUTES.DASHBOARD} component={BottomMenu} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
