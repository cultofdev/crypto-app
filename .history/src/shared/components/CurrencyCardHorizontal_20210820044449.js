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
                backgroundColor: COLORS.gray2,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* Image */}
            <Image
                source={currencyItem.image}
                resizeMode="cover"
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: SIZES.radius
                }}
            />
            {/* Detail */}
        </TouchableOpacity>
    )
}

export default CurrencyCardHorizontal;