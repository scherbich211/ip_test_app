import { StyleSheet, View } from 'react-native';
import { isIOS } from '@Constants/style.constants';
import { BlurView } from 'expo-blur';
import React, { FC } from 'react';

type Props = {
  //
};

const BlurComponent: FC<Props> = () => ((isIOS) ? (
  <BlurView intensity={15} tint="dark" style={styles.blur} />
) : (
  <View style={styles.blurAndroid} />
));

export default BlurComponent;

const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  blurAndroid: {
    backgroundColor: 'rgba(1, 1, 1, 0.75)',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
