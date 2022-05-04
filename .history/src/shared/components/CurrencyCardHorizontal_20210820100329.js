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
                <View>
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
                <View>
                    <Text>TEST</Text>
                    <Text>TEST</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CurrencyCardHorizontal;