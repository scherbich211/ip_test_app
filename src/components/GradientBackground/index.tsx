import {COLORS} from '@Constants/style.constants';
import {LinearGradient} from 'expo-linear-gradient';
import React, {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

const GradientBackground = ({children, style}: {children: ReactNode; style?: ViewStyle}) => (
  <LinearGradient
    colors={[COLORS.HeavyMetal, COLORS.MineShaft]}
    locations={[0.5, 0.75]}
    style={{
      flex: 1,
      alignItems: 'center',
      width: '100%',
      ...style
    }}>
    {children}
  </LinearGradient>
);

export default GradientBackground;
