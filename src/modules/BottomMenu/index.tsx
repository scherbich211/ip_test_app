import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BlurContainer from './BlurContainer';
import AddStoryMenu from './AddStoryMenu';
import { ROUTES, TabBarStackParamList } from '../../routes';
import Imaginarium from '../../screens/Imaginarium';
import { COLORS } from '../../constants/style.constants';

const Tab = createBottomTabNavigator<TabBarStackParamList>();

const BottomMenu: FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [curTabIndex, setCurTabIndex] = useState(0);

  // TODO: delete after icons
  const Square = () => (
    <View
      style={{
        width: 26,
        height: 26,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      }}
    />
  );

  return (
    <>
      <Tab.Navigator
        screenListeners={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          state: ({
            data: {
              state: { index },
            },
          }) => {
            setCurTabIndex(index as number);
          },
        }}
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ADADAD',
          tabBarLabelStyle: styles.textTabBar,
          tabBarStyle: styles.tabBar,
          headerShown: false,
          tabBarIconStyle: styles.imageTabBar,
        }}
      >
        <Tab.Screen
          name={ROUTES.IMAGINARIUM}
          component={Imaginarium}
          options={{
            tabBarIcon: Square,
            tabBarLabel: 'Imaginarium',
          }}
        />
      </Tab.Navigator>

      {isMenuOpen && (
        <>
          <BlurContainer />
          <AddStoryMenu />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageTabBar: { marginTop: 10 },
  textTabBar: { fontSize: 12, marginVertical: 5 },
  tabBar: {
    position: 'absolute',
    height: 99,
    borderTopWidth: 0,
    backgroundColor: COLORS.HeavyMetal,
  },
});

export default BottomMenu;
