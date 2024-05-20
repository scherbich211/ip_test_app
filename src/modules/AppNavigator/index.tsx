import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../../constants/style.constants';
import { ROUTES } from '../../routes';
import BottomMenu from '../BottomMenu';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.MineShaft} />

      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={ROUTES.DASHBOARD} component={BottomMenu} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
