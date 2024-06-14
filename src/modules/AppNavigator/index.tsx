import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '@Constants/style.constants';
import BottomMenu from '@Modules/BottomMenu';
import { RootStackParamList, ROUTES } from '@routes';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.MineShaft} />

      <Navigator screenOptions={{headerShown: false}}>
        <Screen name={ROUTES.DASHBOARD} component={BottomMenu} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
