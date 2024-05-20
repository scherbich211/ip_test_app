import {
  Animated,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { memo } from 'react';
import { ITEM_HEIGHT, ITEM_WIDTH, TDataCarousel, VISIBLE_ITEMS } from '../data';
import { SIZES, COLORS } from '../../../../constants/style.constants';
import Rating from '../Rating';
import { Icon } from '@ui-kitten/components';

type TCarouselItem = {
  item: TDataCarousel;
  index: number;
  scrollXAnimated: Animated.Value;
};

const CarouselItem = ({ item, index, scrollXAnimated }: TCarouselItem) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [SIZES.width * 0.165, 0, -100],
  });
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [-SIZES.width * 0.05, 0, 0],
  });
  const scale = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [0.8, 1, 1.3],
  });
  const opacity = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
  });
  const opacityPlay = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  return (
    <Animated.View
      style={[
        styles.itemContainer,
        {
          opacity,
          transform: [{ translateX }, { translateY }, { scale }],
        },
      ]}
    >
      <View style={styles.imageWrapper}>
        <ImageBackground
          source={{ uri: item.poster }}
          imageStyle={styles.imageBackground}
          style={styles.bottomPlay}
        >
          <LinearGradient
            colors={['transparent', COLORS.HeavyMetal]}
            style={styles.gradient}
          >
            <Rating item={item} />
            <Animated.View style={{ opacity: opacityPlay }}>
              <TouchableOpacity style={styles.playBtn}>
                <Icon name="arrow-right" style={styles.icon} />
              </TouchableOpacity>
            </Animated.View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </Animated.View>
  );
};

export default memo(CarouselItem);

const styles = StyleSheet.create({
  itemContainer: {
    position: 'absolute',
    left: -SIZES.width * 0.448,
  },
  imageWrapper: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
  imageBackground: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 10,
  },
  gradient: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: -1,
  },
  bottomPlay: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
  },
  icon: { width: 35, height: 35 },
  playBtn: {
    width: SIZES.width * 0.14,
    height: SIZES.width * 0.14,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${COLORS.primary}99`,
  },
});
