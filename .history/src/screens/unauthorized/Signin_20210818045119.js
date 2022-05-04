import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { images, COLORS, SIZES, FONTS } from "../../utilities/constants";

const Signin = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>Login</Text>
        </View>
    )
}