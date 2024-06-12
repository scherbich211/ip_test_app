import GradientBackground from '@Components/GradientBackground';
import Typography from '@Components/Typography';
import {COLORS, SIZES} from '@Constants/style.constants';
import {Button, Input} from '@ui-kitten/components';
import React, {memo} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const Market = () => {
  const carouselData = [
    {
      image: 'https://grafit-art.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1File.ad0c0f56.webp&w=1920&q=75',
    },
    {
      image: 'https://grafit-art.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2File.560258d6.webp&w=1200&q=75',
    },
    {
      image: 'https://grafit-art.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3File.9ab7c3f5.webp&w=1200&q=75',
    },
    // Add more data objects
  ];
  const imageData = [
    {
      id: 1,
      image: 'https://grafit-art.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1File.ad0c0f56.webp&w=1920&q=75',
    },
    {
      id: 2,
      image: 'https://grafit-art.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2File.560258d6.webp&w=1200&q=75',
    },
    {
      id: 3,
      image: 'https://grafit-art.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3File.9ab7c3f5.webp&w=1200&q=75',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <GradientBackground>
        <Typography style={styles.header} element="h1">
          IP DETECTOR
        </Typography>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: SIZES.width * 0.9,
          }}>
          <Input
            style={{
              backgroundColor: COLORS.White,
              borderRadius: 10,
              width: '82%',
            }}
            placeholder="Search IP"
          />
          <Button style={{borderRadius: 10, width: '15%'}} />
        </View>
      </GradientBackground>
    </SafeAreaView>
  );
};

export default memo(Market);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.HeavyMetal,
  },
  gestureWrapper: {flex: 1},
  header: {
    paddingVertical: SIZES.spacing * 2.5,
    alignSelf: 'center',
  },

  sliderBar: {},
  sliderThumb: {},
});
