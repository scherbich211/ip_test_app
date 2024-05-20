import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SIZES } from '../../constants/style.constants';

type LayoutProps = {
  children?: ReactNode;
  style?: ViewStyle;
  justifyContent?: ViewStyle['justifyContent'];
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  justifyContent = 'space-between',
  style,
  children,
}) => {
  const styles = useStyles(justifyContent);
  return (
    <View style={StyleSheet.flatten([styles.main, style])}>{children}</View>
  );
};
Layout.defaultProps = {
  justifyContent: 'space-between',
  style: undefined,
  children: undefined,
};

type Styles = {
  main: ViewStyle;
};

const useStyles = StyleSheet.create(() => ({
  main: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: SIZES.width * 0.05,
    marginBottom: 20,
    height: '100%',
    justifyContent: 'space-between',
  },
}));

export default Layout;
