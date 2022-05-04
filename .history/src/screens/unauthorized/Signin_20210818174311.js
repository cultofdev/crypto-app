import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from 'react-native';

import { images, COLORS, SIZES, FONTS } from "../../utilities/constants";

import LinearGradient from 'react-native-linear-gradient';

const Signin = ({ navigation }) => {

    function renderHeader() {
        return (
            <View
                style={{
                    height: SIZES.height > 700 ? "70%" : "65%"
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
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={[
                            COLORS.transparent,
                            COLORS.black,
                        ]}
                        style={{
                            height: 200,
                            justifyContent: 'flex-end',
                            paddingHorizontal: SIZES.padding,
                        }}
                    >
                        <Text
                            style={{
                                width: "80%",
                                color: COLORS.white,
                                ...FONTS.largeTitle,
                                lineHeight: 45
                            }}
                        >
                            Sign in to your account
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.black,
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