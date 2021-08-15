import React from 'react';
import { View, Text , Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const devideHeight = Dimensions.get('window').height;
const devideWidth = Dimensions.get('window').width;

// import { Container } from './styles';

const chip = ({icon, value, period}) => {
    return (
        <View style={{ marginRight: 8, flexDirection: 'row', backgroundColor: `rgba(${period === 1 ? colors.morningPrimary : period === 2 ? colors.dayPrimary : period === 3 ? colors.sunsetPrimary : period === 4 ? colors.twiligthPrimary : colors.nigthPrimary},0.4)`, padding: 10, borderRadius: 5 ,}}>
            <MaterialIcon name={icon} size={14} color={colors.white} />
            <Text style={{ fontFamily: fonts.semibold, color: colors.white, marginLeft: 5, fontSize: 10 }}>{value}</Text>
        </View>
    );
}

export default chip;