// HomeScreen.js

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllTasks from './allTabs';
import WorkTasks from './work';
import PersonalTasks from './personal';

const Tab = createMaterialTopTabNavigator();

const TabConatiner = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarIndicatorStyle:{
            backgroundColor: '#75BAFF'   
        }
    }}
    >
        <Tab.Screen name="AllTasks" component={AllTasks} options={{tabBarLabel: 'All'}} />
        <Tab.Screen name="WorkTasks" component={WorkTasks} options={{tabBarLabel: 'Work'}}/>
        <Tab.Screen name="PersonalTasks" component={PersonalTasks} options={{tabBarLabel: 'Personal'}}/>
    </Tab.Navigator>
  );
};

export default TabConatiner;
