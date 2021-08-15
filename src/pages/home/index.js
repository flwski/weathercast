import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import { color } from 'react-native-reanimated';

import Header from '../../components/header';
import Weather from '../../components/weather';
import Menu from '../../components/menu';

import * as colors from '../../styles/colors';



const devideHeight = Dimensions.get('window').height;
const devideWidth = Dimensions.get('window').width;

const sunset = require('../../../assets/imgs/sunset.png');
const nigth = require('../../../assets/imgs/nigth.png');
const morning = require('../../../assets/imgs/morning.png');
const twilight = require('../../../assets/imgs/twilight.png');
const day = require('../../../assets/imgs/day.png');

const home = ({navigation}) => {

  const [period, setPeriod] = React.useState(5);  //1 Manhã - 2 Dia - 3 Por Do Sol - 4 Crepúsculo - 5 Noite
  const [saudacao, setSaudacao] = React.useState('');

  useEffect(() => {
    let date = new Date();
    console.log(date.getHours());

    // if (date.getHours() >= 6 && date.getHours() < 17) {
    //   setPeriod(2);
    //   setSaudacao('Bom dia');
    // }
    // else if (date.getHours() >= 17 && date.getHours() < 18) {
    //   setPeriod(3);
    //   setSaudacao('Boa tarde');
    // }
    // else {
    //   setPeriod(5);
    //   setSaudacao('Boa Noite');
    // }

  }, []);

  return (
    <ImageBackground
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.98 }}
      resizeMode='cover'
      source={period === 1 ? morning : period === 2 ? day : period === 3 ? sunset : period === 4 ? twilight : nigth}>

      {/* <Header
        period={period}
        saudacao={saudacao}
      /> */}

      <Weather
        period={period}
        saudacao={saudacao}
      />

      <Menu
        period={period}
        navigation={navigation}
      />

    </ImageBackground>
  );
}

export default home;