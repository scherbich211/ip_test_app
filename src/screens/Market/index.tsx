import GradientBackground from '@Components/GradientBackground';
import Typography from '@Components/Typography';
import {COLORS, SIZES} from '@Constants/style.constants';
import {TData} from '@Types/index';
import {Button, Input} from '@ui-kitten/components';
import React, {memo} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Carousel from './Carousel';
import KeyboardDismissView from './KeyboardDismissView';
import Table from './Table';

const Market = () => {
  const headerText = ['IP Adress', 'Location', 'Timezone', 'ISP'];
  const data: TData[] = [{id: 1, ip: '123123123123', location: 'new york', timezone: 'utc+3', isp: 'pidaaaaor'}];

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardDismissView>
        <GradientBackground style={{paddingVertical: 25, justifyContent: 'space-between', flex: 1}}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'brown',
            }}>
            <Typography style={styles.header} element="h1">
              IP DETECTOR
            </Typography>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: SIZES.width * 0.9,
                marginTop: 20,
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
            <Table data={data} headerText={headerText} />
          </View>
          <Carousel />
        </GradientBackground>
      </KeyboardDismissView>
    </SafeAreaView>
  );
};

export default memo(Market);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignSelf: 'center',
  },
});
