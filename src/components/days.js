import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

const days = ({ nextDays, period }) => {
    return (
        <ScrollView>
            <View style={{ elevation: 0, backgroundColor: `rgba(${period === 1 ? colors.morningPrimary : period === 2 ? colors.dayPrimary : period === 3 ? colors.sunsetPrimary : period === 4 ? colors.twiligthPrimary : colors.nigthPrimary},1)`, borderRadius: 5, marginTop: 10, padding: 15, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginHorizontal: 10 }}>

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
        </ScrollView>
    );
}

export default days;