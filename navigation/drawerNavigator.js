import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/profile';
import Stack from './stack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen component={Stack} name="home"/>
        <Drawer.Screen component={Profile} name="profile"/>
    </Drawer.Navigator>
  );
}