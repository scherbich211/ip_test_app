import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ROUTES } from '../../../routes';
import Typography from '../../../components/Typography';
import { COLORS, SIZES } from '../../../constants/style.constants';

type Props = {
};

const AddStoryMenu: FC<Props> = () => (
  <>
    <View style={styles.blurView}>
      <TouchableOpacity
        style={styles.flowBtn}
        onPress={() => {}}
      >
        <Typography
          element="h2"
          color={COLORS.primary}
          style={styles.flowTitle}
        >
          Simple flow
        </Typography>
        <Typography element="body" color="black">
          Only need few words from you, and we will create whole story by
          ourself
        </Typography>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flowBtn}
        onPress={() => {}}
      >
        <Typography
          element="h2"
          color={COLORS.primary}
          style={styles.flowTitle}
        >
          Extended flow
        </Typography>
        <Typography element="body" color="black">
          Only need few words from you, and we will create whole story by
          ourself
        </Typography>
      </TouchableOpacity>
    </View>
  </>
);

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    bottom: SIZES.height * 0.135,
    backgroundColor: COLORS.White,
    borderRadius: 10,
    right: SIZES.width * 0.085,
  },
  flowBtn: { padding: 15, width: SIZES.width * 0.75 },
  flowTitle: { marginBottom: 5 },
  icon: { width: 35, height: 35 },
  divider: { backgroundColor: COLORS.HeavyMetal },
});

export default AddStoryMenu;
