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
                <LinearGradient
                    start={{ x: .2, y: .5 }}
                    stop={{ x: .6, y: 0 }}
                    colors={colors}
                    style={{
                        ...buttonContainerStyle,
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: COLORS.white,
                            ...FONTS.h3
                        }}
                    >
                        {buttonText}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    ...buttonContainerStyle
                }}
                onPress={onPress}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: COLORS.lightYellow,
                        ...FONTS.h3
                    }}
                >
                    {buttonText}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default CustomButton;