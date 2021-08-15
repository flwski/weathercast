import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import InfoChip from './chip';

export default function weather({ period, saudacao }) {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {

    }, []);

    return (
        <>
            <ScrollView style={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={styles.column}>
                    <View>
                        <View style={{ marginLeft: 0 }}>
                            <Text style={styles.subtitle}>{saudacao}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="location-outline" size={16} color={colors.white} />
                            <Text style={styles.city}>Presidente Prudente - SP</Text>
                        </View>
                        <Text style={styles.temperature}>33º</Text>
                        <Text style={styles.condition}>Céu Claro</Text>
                    </View>
                    {/* <View>
                        <Icon name="sunny-outline" size={55} color={colors.warning} />
                    </View> */}
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row' }}>

                    <InfoChip
                        icon="weather-windy"
                        value="1.5 Km"
                        period={period}
                    />

                    <InfoChip
                        icon="water-outline"
                        value="60%"
                        period={period}
                    />

                    <InfoChip
                        icon="weather-sunset-up"
                        value="06:00"
                        period={period}
                    />

                    <InfoChip
                        icon="weather-sunset-down"
                        value="17:00"
                        period={period}
                    />

                </View>
            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 180,
        borderRadius: 8,
        backgroundColor: 'rgba(141,18,63,0)',
        // elevation: 15,
        padding: 0,

    },
    subtitle: {
        color: colors.white,
        fontSize: 25,
        fontFamily: fonts.semibold,
        marginTop: -5,

    },
    container2: {
        display: 'none',
        marginHorizontal: 15,
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: 'rgba(42,30,94,0)',
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
