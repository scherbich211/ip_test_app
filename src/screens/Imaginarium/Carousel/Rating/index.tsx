import { StyleSheet, View } from 'react-native';
import { TDataCarousel } from '../data';
import React from 'react';
import Typography from '../../../../components/Typography';
import { Icon } from '@ui-kitten/components';

const Rating = ({ item }: { item: TDataCarousel }) => (
  <View style={styles.column}>
    <View style={styles.row}>
      {Array.from({ length: item.rating }, (_, index1) => (
        <Icon name="star" fill="white" key={index1} style={styles.icon} />
      ))}
      {Array.from({ length: 5 - item.rating }, (_, index1) => (
        <Icon name="star" fill="grey" key={index1} style={styles.icon} />
      ))}
    </View>
    <Typography>{item.votes} votes</Typography>
  </View>
);

export default Rating;

const styles = StyleSheet.create({
  column: { flexDirection: 'column' },
  row: { flexDirection: 'row' },
  icon: { width: 20, height: 20, color: 'white' },
});
