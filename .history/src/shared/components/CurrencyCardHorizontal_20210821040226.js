import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import { LineChart } from 'react-native-chart-kit';

import { COLORS, FONTS, SIZES } from '../../utilities/constants';

const CurrencyCardHorizontal = ({containerStyle, currencyItem, onPress}) => {
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        // color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    
    const data = {
        datasets: [
            {
                data: [20,45,28,80,99,43],
                strokeWidth: 2
            }
        ]
    }

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
                    flex: 1,
                    marginLeft: 10
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

            {/* Graph */}
            <View
                style={{
                    flex: 1,
                }}
            >
                <LineChart
                    data={data}
                    width={100}
                    height={50}
                    chartConfig={chartConfig}
                    bezier
                    withDots={false}
                    withInnerLines={false}
                    withOuterLines={false}
                    withVerticalLines={false}
                    withHorizontalLines={false}
                    withHorizontalLabels={false}
                    withVerticalLabels={false}
                    style={{
                        paddingLeft: 0,
                        paddingRight: 0
                    }}
                />
            </View>    

            {/* Rate */}
            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-end',
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
        </TouchableOpacity>
    )
}

export default CurrencyCardHorizontal;