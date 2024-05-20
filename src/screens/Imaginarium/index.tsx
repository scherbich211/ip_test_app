import React, { FC, memo } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet } from 'react-native';
import CategoryFilters from './CategoryFilters';
import { SPACING } from './Carousel/data';
import GradientBackground from '../../components/GradientBackground';
import Layout from '../../components/Layout';
import Typography from '../../components/Typography';
import { COLORS, SIZES } from '../../constants/style.constants';
import Carousel from './Carousel';

type Props = {
  //
};

const Imaginarium: FC<Props> = () => (
  <SafeAreaView style={styles.container}>
    <GradientBackground>
      <GestureHandlerRootView style={styles.gestureWrapper}>
        {/* <Layout style={styles.layout}> */}
          <Typography style={styles.header} element="h3">
            Imaginarium.
          </Typography>
          <CategoryFilters />
          <Carousel />
        {/* </Layout> */}
      </GestureHandlerRootView>
    </GradientBackground>
  </SafeAreaView>
);

export default memo(Imaginarium);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.HeavyMetal,
  },
  gestureWrapper: { flex: 1 },
  layout: {
    flexGrow: 1,
    width: SIZES.width,
    paddingTop: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 25,
    marginBottom: SPACING * 2.5,
  },
});
