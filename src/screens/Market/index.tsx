import GradientBackground from '@Components/GradientBackground';
import Typography from '@Components/Typography';
import {COLORS, SIZES} from '@Constants/style.constants';
import {getPublicIP} from '@Utils/getPublicIP';
import {Button, Input} from '@ui-kitten/components';
import {DataContext} from 'App';
import React, {memo, useContext, useEffect} from 'react';
import {Keyboard, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Carousel from '../../components/Carousel';
import Table from '../../components/Table';

const Market = () => {
  const {info, changeInfo} = useContext(DataContext);
  useEffect(() => {
    const fetchCombinedInfo = async () => {
      try {
        // if () {
        //   const locationDetails = await getLocationDetails(ip);
        // setLocationInfo(locationDetails);
        // }
        const ip_public = await getPublicIP();
        const locationDetails = await getLocationDetails(ip_public);
        changeInfo({...locationDetails, ...info});
      } catch (error) {
        // setError(error.message || 'Error fetching information');
      }
    };

    fetchCombinedInfo();
  }, []);

  async function getLocationDetails(ip_public: string) {
    try {
      const response = await fetch(`https://ipwho.is/${ip_public}`);
      const data = await response.json();
      // Assuming response structure:
      const {ip, city, country_code, timezone, connection} = data;
      return {ip, location: `${city}, ${country_code}`, utc: timezone.utc, isp: connection.isp}; // Transform response to desired object
    } catch (error) {
      console.error('Error fetching location details:', error);
      throw error;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <GradientBackground style={styles.spacing}>
        <TouchableOpacity onPress={Keyboard.dismiss} activeOpacity={1} style={styles.alignCenter}>
          <Typography style={styles.header} element="h1">
            IP DETECTOR
          </Typography>
          <View style={styles.searchContainer}>
            <Input style={styles.input} placeholder="Search IP" />
            <Button style={styles.btn} />
          </View>
          <Table data={info} />
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
  input: {
    backgroundColor: COLORS.White,
    borderRadius: 10,
    width: '82%',
  },
  btn: {borderRadius: 10, width: '15%'},
  header: {
    alignSelf: 'center',
  },
});
