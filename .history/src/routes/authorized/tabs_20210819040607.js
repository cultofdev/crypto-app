import React from 'react';
import {
    View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../../screens/authorized';
import { COLORS, icons } from '../../utilities/constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: 'transparent',
                    height: 100
                }
            }}
        >
            <Tab.Screen 
                name="Dashboard"
                component={Dashboard}
            />
            <Tab.Screen 
                name="Search"
                component={Dashboard}
            />
            <Tab.Screen 
                name="Bookmark"
                component={Dashboard}
            />
            <Tab.Screen 
                name="Settings"
                component={Dashboard}
            />
        </Tab.Navigator>
    )
}

export default Tabs;