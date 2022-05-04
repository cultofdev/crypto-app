import React from 'react';
import {
    View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../../screens/authorized';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
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