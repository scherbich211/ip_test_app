import {
  FlatList,
  StyleSheet,
  View,
  Animated,
  ListRenderItem,
  ScrollView,
} from 'react-native';
import React, { memo } from 'react';
import { DataCarousel, ITEM_HEIGHT, TDataCarousel } from './data';
import AnimationContainer from './AnimationContainer';
import Description from './Description';
import CarouselItem from './CarouselItem';
import Typography from '../../../components/Typography';
import { COLORS, SIZES } from '../../../constants/style.constants';

const Carousel = () => {
  //   const [data, setData] = React.useState(DataCarousel);
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [indexElement, setIndexElement] = React.useState(0);

  const setActiveIndex = React.useCallback(
    (activeIndex: number) => {
      scrollXIndex.setValue(activeIndex);
      setIndexElement(activeIndex);
    },
    [scrollXIndex]
  );

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  const CellRendererComponent = React.useCallback(
    ({ index, children, style, ...props }) => {
      const newStyle = [style, { zIndex: DataCarousel.length - index }];
      return (
        <View style={newStyle} {...props}>
          {children}
        </View>
      );
    },
    []
  );

  const renderItem: ListRenderItem<TDataCarousel> = React.useCallback(
    ({ item, index }) => (
      <CarouselItem
        item={item}
        index={index}
        scrollXAnimated={scrollXAnimated}
      />
    ),
    [scrollXAnimated]
  );

  const keyExtractor = React.useCallback((item) => item.id, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <AnimationContainer
        setActiveIndex={setActiveIndex}
        indexElement={indexElement}
      >
        <View>
          <FlatList
            data={DataCarousel}
            keyExtractor={keyExtractor}
            horizontal
            inverted
            contentContainerStyle={styles.contentContainer}
            scrollEnabled={false}
            removeClippedSubviews={false}
            maxToRenderPerBatch={3}
            updateCellsBatchingPeriod={100}
            initialNumToRender={3}
            windowSize={3}
            CellRendererComponent={CellRendererComponent}
            renderItem={renderItem}
          />
          <View style={styles.page}>
            <Typography element="caption" fontSize={12} color={COLORS.disabled}>
              {indexElement + 1} / {DataCarousel.length}
            </Typography>
          </View>
          <Description item={DataCarousel[indexElement]} />
        </View>
      </AnimationContainer>
    </ScrollView>
  );
};

export default memo(Carousel);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width * 0.9,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    height: ITEM_HEIGHT,
  },
  page: {
    position: 'absolute',
    right: 0,
    top: ITEM_HEIGHT,
  },
});
