import React from 'react';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';

const CustomTabBar = (props) => {
    return (
        <BlurView
            style={{
                position: 'absolute',
                bottom: 20,
                left: 0,
                right: 0
            }}
            blurType="light"
            blurAmount={10}
            blurRadius={25}
            overlayColor="transparent"
        >
            <BottomTabBar {...props} />
        </BlurView> 
    )
}

export default CustomTabBar;