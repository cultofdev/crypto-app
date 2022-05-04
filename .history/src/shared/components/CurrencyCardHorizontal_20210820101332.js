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
                    paddingHorizontal: 20,
                    flexDirection: 'row'
                }}
            >
                <View
                    style={{
                        // flex: 1,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.h3,
                        }}
                    >
                        {currencyItem.name}    
                    </Text>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                    >
                        {currencyItem.abbr}
                    </Text>
                </View>
                <View
                    style={{
                        alignItems: 'flex-end'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.gray2,
                            ...FONTS.body4
                        }}
                    >
                        {currencyItem.rate}
                    </Text>
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.body5
                        }}
                    >
                        {currencyItem.high}
                    </Text>
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.body5
                        }}
                    >
                        {currencyItem.low}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CurrencyCardHorizontal;