import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const forecast = ({ navigation, route }) => {

    const [period, setPeriod] = useState(route.params.period);

    useEffect(()=>{
        console.log(period);
    },[]);

    return (
        <View style={{flex:1, backgroundColor:`rgba(${period === 1 ? colors.morningPrimary : period === 2 ? colors.dayPrimary : period === 3 ? colors.sunsetPrimary : period === 4 ? colors.twiligthPrimary : colors.nigthPrimary},1)`}}>
            <View style={styles.container2} >
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="calendar-outline" size={16} color={colors.white} />
                    <Text style={styles.city}>Previsão do Tempo (5 dias)</Text>
                </View>

                <View style={{ backgroundColor: '#4e68a3', borderRadius: 5, marginTop: 10, padding: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 13 }}>

                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: fonts.semibold, color: colors.white, fontSize: 13, }}>15/08</Text>
                    </View>
                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13, }}>Domingo</Text>
                    </View>
                    <View>
                        <Icon name="sunny-outline" size={30} color={colors.warning} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13 }}>19ºC</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13 }}>33ºC</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: '#4e68a3', borderRadius: 5, marginTop: 10, padding: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 13 }}>

                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: fonts.semibold, color: colors.white, fontSize: 13, }}>15/08</Text>
                    </View>
                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13, }}>Domingo</Text>
                    </View>
                    <View>
                        <Icon name="sunny-outline" size={30} color={colors.warning} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13 }}>19ºC</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13 }}>33ºC</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: '#4e68a3', borderRadius: 5, marginTop: 10, padding: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 13 }}>

                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: fonts.semibold, color: colors.white, fontSize: 13, }}>15/08</Text>
                    </View>
                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13, }}>Domingo</Text>
                    </View>
                    <View>
                        <Icon name="sunny-outline" size={30} color={colors.warning} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13 }}>19ºC</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13 }}>33ºC</Text>
                    </View>
                </View>


                <View style={{ backgroundColor: '#4e68a3', borderRadius: 5, marginTop: 10, padding: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 13 }}>

                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: fonts.semibold, color: colors.white, fontSize: 13, }}>15/08</Text>
                    </View>
                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13, }}>Domingo</Text>
                    </View>
                    <View>
                        <Icon name="sunny-outline" size={30} color={colors.warning} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13 }}>19ºC</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13 }}>33ºC</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: '#4e68a3', borderRadius: 5, marginTop: 10, padding: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 13 }}>

                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: fonts.semibold, color: colors.white, fontSize: 13, }}>15/08</Text>
                    </View>
                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13, }}>Domingo</Text>
                    </View>
                    <View>
                        <Icon name="sunny-outline" size={30} color={colors.warning} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13 }}>19ºC</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: fonts.regular, color: colors.white, fontSize: 13 }}>33ºC</Text>
                    </View>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container2: {       
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 8,        
        // elevation: 15,
        padding: 15,

    },
    column: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    temperature: {
        fontSize: 60,
        fontFamily: fonts.regular,
        color: colors.white
    },
    condition: {
        fontFamily: fonts.regular,
        color: colors.white,
        marginTop: -10
    },
    city: {
        color: colors.white,
        fontSize: 13,
        fontFamily: fonts.semibold,
        marginLeft: 5
    }
})

export default forecast;