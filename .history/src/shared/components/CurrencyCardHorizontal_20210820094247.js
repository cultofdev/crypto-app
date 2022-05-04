import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import { COLORS, FONTS, SIZES } from '../../utilities/constants';

const CurrencyCardHorizontal = ({containerStyle, currencyItem, onPress}) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                marginTop: 10,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.black1,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* Image */}
            <Image
                source={currencyItem.img}
                resizeMode="cover"
                style={{
                    width: 75,
                    height: 75,
                    borderRadius: SIZES.radius
                }}
            />
            {/* Detail */}
            <View
                style={{
                    width: '65%',
                    paddingHorizontal: 20
                }}
            >
                
            </View>
        </TouchableOpacity>
    )
}

export default CurrencyCardHorizontal;