import React from 'react';
import { View, TouchableOpacity, ScrollView,Text , Dimensions } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

const devideHeight = Dimensions.get('window').height;
const devideWidth = Dimensions.get('window').width;

const menu = ({navigation, period}) => {
  return (
    <ScrollView style={{position:'absolute', bottom:25, marginLeft:25}} horizontal={true}>
        <TouchableOpacity activeOpacity={0.9} style={{ backgroundColor: `rgba(${period === 1 ? colors.morningPrimary : period === 2 ? colors.dayPrimary : period === 3 ? colors.sunsetPrimary : period === 4 ? colors.twiligthPrimary : colors.nigthPrimary},0.6)`, borderRadius:5, height:devideHeight*0.11, width:devideHeight*0.13, padding:10}}>
        <Icon name="location-outline" size={20} color="#fff" />
            <Text style={{fontFamily:fonts.ligth, fontSize:11, marginTop:10, color:'#fff'}}>Carregar Localização</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Forecast',{period:period})}} activeOpacity={0.9} style={{ backgroundColor: `rgba(${period === 1 ? colors.morningPrimary : period === 2 ? colors.dayPrimary : period === 3 ? colors.sunsetPrimary : period === 4 ? colors.twiligthPrimary : colors.nigthPrimary},0.6)`, marginLeft:10, borderRadius:5, height:devideHeight*0.11, width:devideHeight*0.13, padding:10}}>
        <MaterialIcons name="calendar-text-outline" size={20} color="#fff" />
            <Text style={{fontFamily:fonts.ligth, fontSize:11, marginTop:10, color:'#fff'}}>Próximos     Dias</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={{ backgroundColor: `rgba(${period === 1 ? colors.morningPrimary : period === 2 ? colors.dayPrimary : period === 3 ? colors.sunsetPrimary : period === 4 ? colors.twiligthPrimary : colors.nigthPrimary},0.6)`, marginLeft:10, borderRadius:5, height:devideHeight*0.11, width:devideHeight*0.13, padding:10}}>
            <Icon name="information-circle-outline" size={20} color="#fff" />
            <Text style={{fontFamily:fonts.ligth, fontSize:11, marginTop:10, color:'#fff'}}>Sobre o       App</Text>
        </TouchableOpacity>       
    </ScrollView>
  );
}

export default menu;