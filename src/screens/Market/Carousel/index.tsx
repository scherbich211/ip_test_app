import {COLORS, SIZES} from '@Constants/style.constants';
import React, {memo} from 'react';
import {Animated, KeyboardAvoidingView, View} from 'react-native';

const imageData = [
  {
    id: '1',
    image: 'https://grafit-art.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1File.ad0c0f56.webp&w=1920&q=75',
  },
  {
    id: '2',
    image: 'https://grafit-art.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2File.560258d6.webp&w=1200&q=75',
  },
  {
    id: '3',
    image: 'https://grafit-art.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3File.9ab7c3f5.webp&w=1200&q=75',
  },
];

const Carousel = () => {
  const [selected, setSelected] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const ITEM_SIZE = SIZES.width * 0.7;
  const ITEM_SPACING = (SIZES.width - ITEM_SIZE) / 2;

  const renderItem = ({item, index}) => {
    const inputRange = [(index - 1) * ITEM_SIZE, index * ITEM_SIZE, (index + 1) * ITEM_SIZE];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 1, 0.7],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });
    return (
      <View style={{width: ITEM_SIZE, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
        <Animated.Image
          style={{
            width: ITEM_SIZE,
            height: ITEM_SIZE * 0.7,
            opacity,
            transform: [{scale}],
            borderWidth: selected === index ? 2 : 0,
            borderColor: COLORS.primaryComponent,
            borderRadius: 20,
          }}
          source={{uri: item.image}}></Animated.Image>
      </View>
    );
  };

  return (
      <Animated.FlatList
        data={imageData}
        keyExtractor={item => item.id}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: ITEM_SPACING,
        }}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: true})}
        snapToInterval={ITEM_SIZE}
        decelerationRate={'fast'}
        style={{flexGrow: 0}}
        onMomentumScrollEnd={ev => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE);
          setSelected(index);
        }}
        renderItem={renderItem}
      />
  );
};

export default memo(Carousel);
