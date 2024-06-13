import {Dimensions, Platform} from 'react-native';

export const COLORS = {
  White: '#ffffff',
  MineShaft: '#3F3F3F',
  HeavyMetal: '#222222',
  primary: '#AD62D0',
  disabled: '#7D7D7D',
  textDisabled: '#6b6b6b',
  primaryComponent: '#3366FF',
};

const spacing = 10;
const {width, height} = Dimensions.get('window');

export const SIZES = {
  spacing,
  width,
  height,
};

export const isIOS = Platform.OS === 'ios';
