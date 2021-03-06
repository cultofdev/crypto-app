import React from 'react';
import {
    View,
    Image
} from 'react-native';

import { COLORS } from '../../utilities/constants';

const TabIcon = ({focused, icon}) => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 80,
                width: 50
            }}
        >
            <Image 
                source={icon}
                resizeMode="contain"
                style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? COLORS.lightLemon : COLORS.darkYellow
                }}
            />

            {focused &&
                <View
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 25,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        backgroundColor: COLORS.lightLemon
                    }}
                />
            }
        </View>
    )
}

export default TabIcon;