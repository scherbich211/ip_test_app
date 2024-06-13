import Typography from '@Components/Typography';
import {SIZES} from '@Constants/style.constants';
import {TData} from '@Types/index';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Table = ({data, headerText}: {data: TData[]; headerText: Array<string>}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {headerText.map(header => (
          <Typography element="h3" style={styles.text} key={header}>
            {header}
          </Typography>
        ))}
      </View>
      {data.map(row => {
        const selectedValues = Object.keys(row)
          .map(key => row[key])
          .splice(1);
        return (
          <View style={styles.row} key={row.id}>
            {selectedValues.map(it => (
              <Typography element="caption" style={styles.text} key={it}>
                {it}
              </Typography>
            ))}
          </View>
        );
      })}
    </View>
  );
};

export default Table;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: SIZES.width * 0.9,
    marginTop: 25,
  },

  row: {flexDirection: 'row', marginTop: 5},
  text: {flex: 1, textAlign: 'center'},
});
