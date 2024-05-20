import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Typography from '../../../components/Typography';
import { COLORS, SIZES } from '../../../constants/style.constants';

const CategoryFilters = () => {
  const [category, setCategory] = useState<'popular' | 'trending'>('popular');
  return (
    <View style={styles.container}>
      <View style={styles.trendWrapper}>
        <TouchableOpacity
          style={styles.trendBtn}
          onPress={() => setCategory('popular')}
        >
          <Typography
            element="h2"
            style={styles.text}
            color={category !== 'popular' ? COLORS.textDisabled : undefined}
          >
            popular
          </Typography>
        </TouchableOpacity>
        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.trendBtn}
          onPress={() => setCategory('trending')}
        >
          <Typography
            element="h2"
            style={styles.text}
            color={category !== 'trending' ? COLORS.textDisabled : undefined}
          >
            trending
          </Typography>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.filterBtn}>
        {/* <IconFilter /> */}
      </TouchableOpacity>
    </View>
  );
};

export default CategoryFilters;

const styles = StyleSheet.create({
  container: {
    height: SIZES.width * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SIZES.width * 0.9,
    marginBottom: 20,
  },
  trendWrapper: {
    height: '100%',
    backgroundColor: COLORS.MineShaft,
    borderRadius: 100,
    flexDirection: 'row',
  },
  trendBtn: {
    minWidth: SIZES.width * 0.25,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    width: 3,
    height: '100%',
    backgroundColor: COLORS.HeavyMetal,
  },
  text: { textTransform: 'uppercase', fontSize: 13 },
  filterBtn: {
    width: SIZES.width * 0.13,
    height: '100%',
    backgroundColor: COLORS.MineShaft,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
