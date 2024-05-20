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

const getFontSize = (element?: TypographyElement): number => {
  switch (element) {
    case 'h1':
      return 20;
    case 'h2':
      return 16;
    case 'h3':
      return 14;
    case 'body':
      return 14;
    case 'button':
      return 16;
    case 'caption':
      return 12;
    default:
      return 14;
  }
};

const getFontFamily = (element?: TypographyElement): string => {
  switch (element) {
    case 'h1':
      return 'Rubik-Bold';
    case 'h2':
      return 'Rubik-SemiBold';
    case 'h3':
      return 'Rubik-SemiBold';
    case 'body':
      return 'Rubik-Regular';
    case 'button':
      return 'Rubik-Regular';
    case 'caption':
      return 'Rubik-Regular';
    default:
      return 'Rubik-Regular';
  }
};

const getFontWeight = (element?: TypographyElement): FontWeight => {
  switch (element) {
    case 'h1':
      return '600';
    case 'h2':
      return '400';
    case 'h3':
      return '400';
    case 'body':
      return '600';
    case 'button':
      return '600';
    case 'caption':
      return '400';
    default:
      return 'normal';
  }
};

const getLineHeight = (element?: TypographyElement): number => {
  switch (element) {
    case 'h1':
      return 26;
    case 'h2':
      return 22;
    case 'h3':
      return 18;
    case 'body':
      return 20;
    case 'button':
      return 18;
    case 'caption':
      return 18;
    default:
      return 26;
  }
};

type Props = {
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
  element?: TypographyElement;
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
  fontSize?: number;
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
  fontWeight?: FontWeight;
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
  lineHeight?: number;
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
  fontFamily?: string;
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
  children: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  style?: StyleProp<TextStyle>;
  // eslint-disable-next-line react/require-default-props
  onLayout?: (event: LayoutChangeEvent) => void;
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
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
