import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';

import { FONTS, COLORS, SIZES, icons, images } from '../../utilities/constants';
import { CurrencyCardVertical, CurrencyCardHorizontal } from '../../shared/components';

const Dashboard = ({ navigation }) => {
    
    const [dummyData, setDummyData] = React.useState([
        {
            id: 0,
            name: "BITCOIN",
            rate: 8.88,
            high: 9.0,
            low: 7.8
        },
        {
            id: 0,
            name: "ETHERIUM",
            rate: 8.88,
            high: 9.0,
            low: 7.8
        },
        {
            id: 0,
            name: "DOGE",
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
                        <CurrencyCardHorizontal />
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