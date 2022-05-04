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
import { CustomButton } from '../../shared/components';

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
                        end={{ x: 0, y: .80 }}
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
                                lineHeight: 45,
                            }}
                        >
                            Sign in to your account
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }

    function renderDetail() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* Description */}
                <Text
                    style={{
                        marginTop: SIZES.radius,
                        width: "70%",
                        color: COLORS.gray,
                        ...FONTS.body3
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc augue ipsum
                </Text>
                
                {/* Buttons */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}
                >
                    {/* Signin button */}
                    <CustomButton
                        buttonText="Sign in"
                        buttonContainerStyle={{
                            paddingVertical: 12,
                            borderRadius: 20
                        }}
                        colors={[COLORS.darkYellow, COLORS.lemon]}
                        onPress={() => navigation.replace("Dashboard")}
                    />

                    {/* Signup button */}
                    <CustomButton
                        buttonText="Sign up"
                        buttonContainerStyle={{
                            marginTop: SIZES.radius,
                            paddingVertical: 12,
                            borderRadius: 20,
                            borderColor: COLORS.darkLemon,
                            borderWidth: 1
                        }}
                        colors={[]}
                        onPress={() => navigation.replace("Dashboard")}
                    />
                </View>
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
            {renderDetail()}
        </View>
    )
}

export default Signin;