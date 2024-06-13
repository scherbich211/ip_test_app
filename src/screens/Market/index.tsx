import GradientBackground from '@Components/GradientBackground';
import Typography from '@Components/Typography';
import {COLORS, SIZES} from '@Constants/style.constants';
import {Button, Input} from '@ui-kitten/components';
import React, {memo} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Carousel from './Carousel';

const Market = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GradientBackground style={{justifyContent: 'space-between', paddingBottom: 60}}>
        <View>
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
        </View>
        <Carousel />
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
  header: {
    paddingVertical: SIZES.spacing * 2.5,
    alignSelf: 'center',
  },
});
