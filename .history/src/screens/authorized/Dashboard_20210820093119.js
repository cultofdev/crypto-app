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
            high: 9.0,
            low: 7.8
        },
        {
            id: 1,
            name: "Etherium",
            abbr: "ETH",
            rate: 8.88,
            high: 9.0,
            low: 7.8
        },
        {
            id: 2,
            name: "Dash",
            abbr: "DASH",
            rate: 8.88,
            high: 9.0,
            low: 7.8
        },
        {
            id: 3,
            name: "Litecoin",
            abbr: "LTC",
            rate: 8.88,
            high: 9.0,
            low: 7.8
        },
        {
            id: 4,
            name: "Ripple",
            abbr: "XRPG",
            rate: 8.88,
            high: 9.0,
            low: 7.8
        },
        {
            id: 5,
            name: "Monero",
            abbr: "XMR",
            rate: 8.88,
            high: 9.0,
            low: 7.8
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

            {/* Search */}


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