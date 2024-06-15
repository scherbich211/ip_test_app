import Typography from '@Components/Typography';
import {SIZES} from '@Constants/style.constants';
import {Spinner} from '@ui-kitten/components';
import React, {memo, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const chartConfig = {
  backgroundColor: '#e26a00',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};

const MarketChart = ({isFocused}: {isFocused: boolean}) => {
  const [dataPoints, setDataPoints] = useState<Array<number>>([]);
  let previousPrice = null;

  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:443/ws/btcusdt@aggTrade');

    const sendSubscription = () => {
      ws.send(
        JSON.stringify({
          method: 'SUBSCRIBE',
          params: ['btcusdt@aggTrade'],
          id: 1,
        }),
      );
    };

    type TChart = {
      E: number;
      M: boolean;
      T: number;
      a: number;
      e: string;
      f: number;
      l: number;
      m: boolean;
      p: string;
      q: string;
      s: string; //"BTCUSDT"
    };
    let updateTimeoutId = null;

    const debounceUpdateData = updateDataFn => {
      clearTimeout(updateTimeoutId);
      updateTimeoutId = setTimeout(() => {
        updateDataFn();
      }, 5000);
    };

    const updateData = () => {
      ws.onmessage = e => {
        const message: TChart = JSON.parse(e.data);
        if (message && message.p) {
          const newPrice = Number(message.p);
          if (previousPrice === null || newPrice !== previousPrice) {
            setDataPoints(prevDataPoints => {
              const limitedDataPoints = prevDataPoints.slice(-10);
              return [...limitedDataPoints, newPrice];
            });
            previousPrice = newPrice;
          }
        }
      };
    };

    ws.onopen = sendSubscription;
    debounceUpdateData(() => updateData());
    return () => {
      clearTimeout(updateTimeoutId);
      ws.close();
    };
  }, []);

  if (dataPoints.length === 0) {
    return <Spinner />;
  }

  return (
    <>
      <Typography element="h3">BTC/USDT</Typography>
      <LineChart
        data={{
          labels: dataPoints.map((_, index) => index.toString()),
          datasets: [
            {
              data: dataPoints,
            },
          ],
        }}
        width={SIZES.width}
        height={200}
        chartConfig={chartConfig}
        withVerticalLabels
        bezier
        style={{
          marginVertical: 15,
          borderRadius: 10,
        }}
      />
    </>
  );
};

export default memo(MarketChart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
