import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { COLORS, FONTS } from '../../utilities/constants';

const CustomButton = ({ buttonText, buttonContainerStyle, colors, onPress }) => {

    if(colors.length > 0) {
        return (
            <TouchableOpacity
                style={{}}
                onPress={onPress}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: COLORS.white,
                        ...FONTS.h2
                    }}
                >
                    {buttonText}
                </Text>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity
                style={{}}
                onPress={onPress}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: COLORS.white,
                        ...FONTS.h2
                    }}
                >
                    {buttonText}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default CustomButton;