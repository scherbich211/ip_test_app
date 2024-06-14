import GradientBackground from '@Components/GradientBackground';
import Table from '@Components/Table';
import Typography from '@Components/Typography';
import {COLORS, ITEM_SIZE, SIZES} from '@Constants/style.constants';
import {DataContext} from 'App';
import React, {FC, memo, useContext} from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {imageData} from 'src/mockData';

type Props = {
  //
};
const Data: FC<Props> = () => {
  const {image, info} = useContext(DataContext);
  return (
    <SafeAreaView style={styles.container}>
      <GradientBackground style={{alignItems: 'center'}}>
        <Typography style={styles.header} element="h3">
          Data
        </Typography>
        {image !== undefined && (
          <Image
            source={{uri: imageData[image].image}}
            style={{
              width: ITEM_SIZE,
              height: ITEM_SIZE * 0.7,
              borderWidth: 2,
              borderColor: COLORS.primaryComponent,
              borderRadius: 20,
            }}
          />
        )}

        {info.ip && <Table data={info} />}
      </GradientBackground>
    </SafeAreaView>
  );
};

export default memo(Data);

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
