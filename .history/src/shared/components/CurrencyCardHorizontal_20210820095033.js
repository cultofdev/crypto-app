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
                padding: 15,
                marginTop: 15,
                marginHorizontal: 15,
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
                    width: 50,
                    height: 50,
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
                <Text
                    style={{
                        flex: 1,
                        ...FONTS.h2
                    }}
                >
                    {currentItem.name}    
                </Text>    
            </View>
        </TouchableOpacity>
    )
}

export default CurrencyCardHorizontal;