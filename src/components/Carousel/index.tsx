import {COLORS, ITEM_SIZE, ITEM_SPACING} from '@Constants/style.constants';
import {DataContext} from 'App';
import React, {memo, useContext, useEffect} from 'react';
import {Animated, KeyboardAvoidingView, View} from 'react-native';
import {imageData} from 'src/mockData';

const Carousel = () => {
  const {changeImage} = useContext(DataContext);
  const [selected, setSelected] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    changeImage(selected);
  }, [selected]);
  
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
      <View style={{width: ITEM_SIZE, justifyContent: 'center', alignItems: 'center'}}>
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
    <KeyboardAvoidingView>
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
        style={{flexGrow: 0, marginTop: 25, height: ITEM_SIZE * 0.7}}
        onMomentumScrollEnd={ev => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE);
          setSelected(index);
        }}
        renderItem={renderItem}
      />
    </KeyboardAvoidingView>
  );
};

export default memo(Carousel);
