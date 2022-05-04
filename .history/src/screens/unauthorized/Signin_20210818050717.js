import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from 'react-native';

import { images, COLORS, SIZES, FONTS } from "../../utilities/constants";

const Signin = ({ navigation }) => {

    function renderHeader() {
        return (
            <View
                style={{
                    height: SIZES.height > 700 ? "65%" : "60%"
                }}
            >
                <ImageBackground
                    source={images.loginBackground}
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                    }}
                    resizeMode="cover"
                >
                    
                </ImageBackground>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#000"
            }}
        >
            <StatusBar barStyle="light-content" />
            {/* Header Section */}
            {renderHeader()}

            {/* Detail Section */}
        </View>
    )
}

export default Signin;