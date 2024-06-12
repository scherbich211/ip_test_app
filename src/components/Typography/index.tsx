import * as React from 'react';
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  Text,
} from 'react-native';
import { COLORS } from '../../constants/style.constants';

type TypographyElement = 'h1' | 'h2' | 'h3' | 'body' | 'button' | 'caption';
type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

  const getFontSize = (element?: string): number => {
    const fontSizes = {
      h1: 20,
      h2: 16,
      h3: 14,
      body: 14,
      button: 16,
      caption: 12,
    };
  
    return fontSizes[element] || 14; 
  };

const getFontFamily = (element?: string): string => {
  const fontFamilies = {
    h1: 'Rubik-Bold',
    h2: 'Rubik-SemiBold',
    h3: 'Rubik-SemiBold',
    body: 'Rubik-Regular',
    button: 'Rubik-Regular',
    caption: 'Rubik-Regular',
  };

  return fontFamilies[element] || 'Rubik-Regular';
};

const getFontWeight = (element?: string): FontWeight => {
  const fontWeights = {
    h1: '600',
    h2: '400',
    h3: '400',
    body: '600',
    button: '600',
    caption: '400',
  };

  return fontWeights[element] || 'normal';
};

const getLineHeight = (element?: string): number => {
  const lineHeights = {
    h1: 26,
    h2: 22,
    h3: 18,
    body: 20,
    button: 18,
    caption: 18,
  };

  return lineHeights[element] || 26; // Default line height
};

type Props = {
  element?: TypographyElement;
  fontSize?: number;
  fontWeight?: FontWeight;
  lineHeight?: number;
  fontFamily?: string;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  onLayout?: (event: LayoutChangeEvent) => void;
  color?: TextStyle['color'];
};

const Typography: React.FunctionComponent<Props> = (props) => {
  const { children, onLayout, style } = props;
  const styles = useStyles({ props: { ...props } });

  return (
    <Text style={StyleSheet.flatten([styles.main, style])} onLayout={onLayout}>
      {children}
    </Text>
  );
};

const useStyles = ({ props }: { props: Props }) =>
  StyleSheet.create({
    main: {
      fontSize: props.fontSize ? props.fontSize : getFontSize(props.element),
      fontFamily: props.fontFamily
        ? props.fontFamily
        : getFontFamily(props.element),
      fontWeight: props.fontWeight
        ? props.fontWeight
        : getFontWeight(props.element),
      lineHeight: props.lineHeight
        ? props.lineHeight
        : getLineHeight(props.element),
      color: props.color ? props.color : COLORS.White,
    },
  });

export default Typography;
