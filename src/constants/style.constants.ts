import { Dimensions, Platform } from 'react-native';

export const COLORS = {
  White: '#ffffff',
  MineShaft: '#3F3F3F',
  HeavyMetal: '#222222',
  primary: '#AD62D0',
  disabled: '#7D7D7D',
  textDisabled: '#6b6b6b',
};

const { width, height } = Dimensions.get('window');

export const SIZES = {
  width,
  height,
};

export const isIOS = Platform.OS === 'ios';
