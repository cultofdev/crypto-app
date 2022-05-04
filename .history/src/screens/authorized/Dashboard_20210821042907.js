import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    StatusBar,
} from 'react-native';

import { FONTS, COLORS, SIZES, icons, images } from '../../utilities/constants';
import { CurrencyCardVertical, CurrencyCardHorizontal } from '../../shared/components';

const Dashboard = ({ navigation }) => {
    
    const [dummyData, setDummyData] = React.useState([
        {
            id: 0,
            name: "Bitcoin",
            abbr: "BTC",
            rate: 8.88,
            high: 9.634858,
            low: 7.34590,
            img: icons.btc,
            data: {
                datasets: [
                    {
                        data: [80,40,60,44,75,86],
                        strokeWidth: 2
                    }
                ]
            }
        },
        {
            id: 1,
            name: "Etherium",
            abbr: "ETH",
            rate: 8.88,
            high: 9.75279834,
            low: 7.783945,
            img: icons.eth,
            data: {
                datasets: [
                    {
                        data: [20,45,28,80,99,43],
                        strokeWidth: 2
                    }
                ]
            }
        },
        {
            id: 2,
            name: "Dash",
            abbr: "DASH",
            rate: 8.88,
            high: 9.34593,
            low: 7.5345345,
            img: icons.dash,
            data: {
                datasets: [
                    {
                        data: [12,100,35,68,14,5],
                        strokeWidth: 2
                    }
                ]
            }
        },
        {
            id: 3,
            name: "Litecoin",
            abbr: "LTC",
            rate: 8.88,
            high: 9.345353,
            low: 7.345345,
            img: icons.ltc,
            data: {
                datasets: [
                    {
                        data: [32,75,99,45,100,58],
                        strokeWidth: 2
                    }
                ]
            }
        },
        {
            id: 4,
            name: "Ripple",
            abbr: "XRPG",
            rate: 8.88,
            high: 9.3434534,
            low: 7.345345,
            img: icons.xrp,
            data: {
                datasets: [
                    {
                        data: [50,20,40,90,99,12],
                        strokeWidth: 2
                    }
                ]
            }
        },
        {
            id: 5,
            name: "Monero",
            abbr: "XMR",
            rate: 8.88,
            high: 9.534534,
            low: 7.5565,
            img: icons.xmr,
            data: {
                datasets: [
                    {
                        data: [20,45,28,80,99,43],
                        strokeWidth: 2
                    }
                ]
            }
        },
        {
            id: 6,
            name: "AdEx",
            abbr: "ADX",
            rate: 8.88,
            high: 9.46456,
            low: 7.34656,
            img: icons.adx,
            data: {
                datasets: [
                    {
                        data: [20,45,28,80,99,43],
                        strokeWidth: 2
                    }
                ]
            }
        },
    ]);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.black2
            }}
        >
            <StatusBar barStyle="light-content" />

            {/* Header */}
            <View
                style={{
                    padding: 15
                }}
            >
                <View>
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h3
                        }}
                    >
                        Hi Mark Anthony!
                    </Text>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body5
                        }}
                    >
                        Your portfolio looks great today
                    </Text>
                </View>    
            </View> 

            {/* List */}
            <FlatList
                data={dummyData}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View></View>
                }
                renderItem={({item}) => {
                    return (
                        <CurrencyCardHorizontal 
                            currencyItem={item}
                        />
                    )
                }}
                ListFooterComponent={
                    <View
                        style={{
                            marginBottom: 10
                        }}
                    />
                }
            />
        </SafeAreaView>
    )
}

export default Dashboard;