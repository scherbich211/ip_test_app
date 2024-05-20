import { Animated, View, StyleSheet } from 'react-native';
import React from 'react';
import { SPACING, TDataCarousel } from '../data';
import Typography from '../../../../components/Typography';
import { SIZES } from '../../../../constants/style.constants';

const Description = ({ item }: { item: TDataCarousel }) => {
  const opacity = new Animated.Value(0);
  Animated.timing(opacity, {
    duration: 350,
    toValue: 1,
    useNativeDriver: true,
  }).start();
  return (
    <View style={styles.overflowContainer}>
      <Animated.View
        style={{
          opacity: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
        }}
      >
        <Typography element="h1" style={[styles.title]}>
          {item.title}
        </Typography>
        <Typography style={[styles.description]}>{item.description}</Typography>
      </Animated.View>
    </View>
  );
};
export default Description;

const styles = StyleSheet.create({
  overflowContainer: {
    width: SIZES.width * 0.9,
    marginTop: SPACING * 2,
  },
  title: { marginBottom: SPACING, fontSize: 20, lineHeight: 28 },
  description: {
    fontSize: 14,
    lineHeight: 22,
  },
});
