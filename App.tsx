import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import AppNavigator from './src/modules/AppNavigator';

import {TContext, TLocationInfo} from '@Types/index';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import React from 'react';

type TDataContext = React.Context<TContext>;

export const DataContext: TDataContext = React.createContext({
  info: undefined,
  image: undefined,
  changeInfo: () => {},
  changeImage: () => {},
});

export default function App() {
  const [info, setInfo] = useState<TLocationInfo>(undefined);
  const [image, setImage] = useState<number | undefined>(undefined);
  const updateInfo = (newInfo: TLocationInfo) => {
    setInfo(newInfo);
  };
  const updateImage = (newImage: number) => {
    setImage(newImage);
  };
  useEffect(() => {
    console.log('====================================');
    console.log('app', info, image);
    console.log('====================================');
  }, [info, image]);

  const [fontsLoaded] = useFonts({
    'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
    'Rubik-SemiBold': require('./assets/fonts/Rubik-SemiBold.ttf'),
  });
  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) {
      // eslint-disable-next-line no-void
      void SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <DataContext.Provider
          value={{
            info,
            image,
            changeInfo: updateInfo,
            changeImage: updateImage,
          }}>
          <AppNavigator />
        </DataContext.Provider>
      </ApplicationProvider>
    </View>
  );
}
