import { SIZES } from '@Constants/style.constants';
import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type LayoutProps = {
  children?: ReactNode;
  style?: ViewStyle;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  style,
  children,
}) => {
  return (
    <View style={StyleSheet.flatten([styles.main, style])}>{children}</View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: SIZES.width * 0.05,
    marginBottom: 20,
    height: '100%',
    justifyContent: 'space-between',
  },
});

export default Layout;
