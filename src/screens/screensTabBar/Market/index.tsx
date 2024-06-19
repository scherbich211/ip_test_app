import GradientBackground from '@Components/GradientBackground';
import Typography from '@Components/Typography';
import { COLORS, SIZES } from '@Constants/style.constants';
import { TLocationInfo } from '@Types/index';
import { getLocationDetails } from '@Utils/getLocationDetails';
import { getPublicIP } from '@Utils/getPublicIP';
import { Button, Input } from '@ui-kitten/components';
import { DataContext } from 'App';
import React, { memo, useContext, useEffect, useState } from 'react';
import { Keyboard, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { IP_REGEX } from 'src/mockData';
import Carousel from '../../../components/Carousel';
import Table from '../../../components/Table';

const Market = () => {
  const {changeInfo} = useContext(DataContext);
  const [data, setData] = useState<TLocationInfo>();
  const [ipAddress, setIpAddress] = useState('');
  const [errorInput, setErrorInput] = useState(false);

  const handleChange = (text: string) => {
    setIpAddress(text);
    const isValid = IP_REGEX.test(text);
    setErrorInput(isValid);
  };

  useEffect(() => {
    const fetchCombinedInfo = async () => {
      try {
        const ip_public = await getPublicIP();
        const locationDetails = await getLocationDetails(ip_public);
        setData(locationDetails);
        changeInfo(locationDetails);
      } catch (error) {
        console.log('error');
      }
    };
    fetchCombinedInfo();
  }, []);

  const updateLocationDetails = async (ip: string) => {
    const locationDetails = await getLocationDetails(ip);
    setData(locationDetails);
    changeInfo(locationDetails);
  };
  const showTextError = !errorInput && ipAddress

  return (
    <SafeAreaView style={styles.container}>
      <GradientBackground style={styles.spacing}>
        <TouchableOpacity onPress={Keyboard.dismiss} activeOpacity={1} style={styles.alignCenter}>
          <Typography style={styles.header} element="h1">
            IP DETECTOR
          </Typography>
          <View style={styles.searchContainer}>
            <View style={styles.inputContainer}>
              <Input
                style={styles.input}
                keyboardType="number-pad"
                placeholder="Search IP"
                value={ipAddress}
                onChangeText={handleChange}
                maxLength={15}
              />
              {showTextError && <Typography style={styles.red}>Invalid IP format</Typography>}
            </View>
            <Button
              style={styles.btn}
              disabled={!errorInput || !ipAddress}
              onPress={() => updateLocationDetails(ipAddress)}
            />
          </View>
          {data && <Table data={data} />}
        </TouchableOpacity>
        <Carousel />
      </GradientBackground>
    </SafeAreaView>
  );
};

export default memo(Market);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacing: {paddingVertical: 25},
  alignCenter: {
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SIZES.width * 0.9,
    marginTop: 20,
  },
  inputContainer: {
    width: '82%',
  },
  input: {
    backgroundColor: COLORS.White,
    borderRadius: 10,
  },
  btn: {borderRadius: 10, width: '15%', height: 40},
  header: {
    alignSelf: 'center',
  },
  red: {color: 'red'},
});
