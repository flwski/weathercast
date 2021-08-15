import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import Days from '../../components/days';

const forecast = ({ navigation, route }) => {

    const [period, setPeriod] = useState(route.params.period);

    useEffect(() => {
        console.log(period);
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: `rgba(${period === 1 ? colors.morningPrimary : period === 2 ? colors.dayPrimary : period === 3 ? colors.sunsetPrimary : period === 4 ? colors.twiligthPrimary : colors.nigthPrimary},0.8)` }}>
            <View style={styles.container2} >
                <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.goBack()}>
                    <Icon name="chevron-left" size={35} color={colors.white} />
                </TouchableOpacity>
                <View style={{  marginTop:20, marginHorizontal:10, marginBottom:20 }}>                    
                    <Text style={styles.city}>Previsão do Tempo</Text>
                    <Text style={[styles.city,{fontSize:12, fontFamily:fonts.regular}]}>Para os próximos dias</Text>
                </View>

                <Days
                    period={period}
                />      


            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container2: {
        marginHorizontal: 0,
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
        fontSize: 18,
        fontFamily: fonts.semibold,
        marginLeft: 0
    }
})

export default forecast;