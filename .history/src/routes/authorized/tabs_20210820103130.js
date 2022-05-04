import React from 'react';
import {
    View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../../screens/authorized';
import { TabIcon } from '../../shared/components';
import { COLORS, icons } from '../../utilities/constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.black4,
                    borderTopColor: 'transparent',
                    height: 60,
                    borderTopRightRadius: 50,
                    borderTopLeftRadius: 50
                }
            }}
        >
            <Tab.Screen 
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.home} />
                }}
            />
            <Tab.Screen 
                name="Search"
                component={Dashboard}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.search} />
                }}
            />
            <Tab.Screen 
                name="Bookmark"
                component={Dashboard}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.bookmark} />
                }}
            />
            <Tab.Screen 
                name="Settings"
                component={Dashboard}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.settings} />
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;