import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const header = ({ period, saudacao }) => {
  return (
    <LinearGradient colors={[`rgba(${period === 1 ? colors.morningPrimary : period === 2 ? colors.dayPrimary : period === 3 ? colors.sunsetPrimary : period === 4 ? colors.twiligthPrimary : colors.nigthPrimary}, 0.9)`, `rgba(${period === 1 ? colors.morningPrimary : period === 2 ? colors.dayPrimary : period === 3 ? colors.sunsetPrimary : period === 4 ? colors.twiligthPrimary : colors.nigthPrimary}, 0)`]} style={{height:150}} >
    <View style={styles.container}>    
     
      <View style={{marginLeft:10}}>        
        <Text style={styles.subtitle}>{saudacao}!</Text>
      </View>

    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 45,
    flexDirection: 'row',
    alignItems:'center'
  },
  title: {
    color: colors.white,
    fontSize: 11,
    fontFamily: fonts.regular,

  },
  subtitle: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.semibold,
    marginTop: -5,

  },

});

export default header;