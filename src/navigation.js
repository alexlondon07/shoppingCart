//import React from 'react';
import {  StackNavigator, DrawerNavigator } from 'react-navigation';
//import { createBottomTabNavigator } from 'react-navigation-tabs'


import Catalog from './scenes/Catalog';
import CatalogDetail from './scenes/CatalogDetail';
import { SideMenu } from './side-menu';
import Cart from './scenes/Cart';

    export const StackProducts = StackNavigator({
        CatalogScreen: { screen: Catalog },
        CatalogDetailScreen: { screen: CatalogDetail },
    },
    {
      initialRouteName: 'CatalogScreen',
    });

    export const StackCart = StackNavigator({
        CartScreen: { screen: Cart },
    });
  
    export const Drawer = DrawerNavigator({
        StackScren: { screen: StackProducts },
        StackCarScreen: { screen: StackCart },
    },{
        drawerWidth: 300,
        contentComponent: SideMenu
    });