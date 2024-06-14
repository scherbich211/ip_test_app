import MarketChart1 from '@Components/MarketData';
import {useIsFocused} from '@react-navigation/native';
import React, {FC, memo} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import GradientBackground from '../../components/GradientBackground';
import Typography from '../../components/Typography';
import {COLORS, SIZES} from '../../constants/style.constants';

type Props = {
  //
};

const Market: FC<Props> = () => {
  const isFocused = useIsFocused();

  return (
    <SafeAreaView style={styles.container}>
      <GradientBackground>
        <GestureHandlerRootView style={styles.gestureWrapper}>
          <Typography style={styles.header} element="h3">
            Chart
          </Typography>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            {isFocused && <MarketChart1 isFocused={isFocused} />}
          </View>
        </GestureHandlerRootView>
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
  layout: {
    flexGrow: 1,
    width: SIZES.width,
    paddingTop: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 25,
    marginVertical: SIZES.spacing * 2.5,
    alignSelf: 'center',
  },
});
