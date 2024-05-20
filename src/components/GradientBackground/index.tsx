import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { COLORS } from '../../constants/style.constants';

const GradientBackground = ({ children }: { children: ReactNode }) => (
  <LinearGradient
    colors={[COLORS.HeavyMetal, COLORS.MineShaft]}
    locations={[0.5, 0.75]}
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}
  >
    {children}
  </LinearGradient>
);

export default GradientBackground;
