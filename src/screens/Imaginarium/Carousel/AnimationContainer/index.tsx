import React, { memo } from 'react';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
import { DataCarousel } from '../data';

type TAnimationContainer = {
  setActiveIndex: (activeIndex: number) => void;
  indexElement: number;
  children: React.ReactNode;
};

const AnimationContainer = ({
  setActiveIndex,
  indexElement,
  children,
}: TAnimationContainer) => (
  <FlingGestureHandler
    key="left"
    direction={Directions.LEFT}
    onHandlerStateChange={(ev) => {
      if (ev.nativeEvent.state === State.END) {
        if (indexElement === DataCarousel.length - 1) {
          return;
        }
        setActiveIndex(indexElement + 1);
      }
    }}
  >
    <FlingGestureHandler
      key="right"
      direction={Directions.RIGHT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (indexElement === 0) {
            return;
          }
          setActiveIndex(indexElement - 1);
        }
      }}
    >
      {children}
    </FlingGestureHandler>
  </FlingGestureHandler>
);

export default memo(AnimationContainer);
