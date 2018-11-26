import React from 'react';
import {  createStackNavigator, StackNavigator, DrawerNavigator, createSwitchNavigator } from 'react-navigation';

import Catalog from '../scenes/Catalog';
import CatalogDetail from '../scenes/CatalogDetail';
import { SideMenu } from './side-menu';
import Login from '../scenes/Login';
import AuthLoading from '../scenes/Login/components/authLoading';
import Profile from '../scenes/Profile';
import Cart from '../scenes/Cart';
import { CartInfo } from '../scenes/Cart/components/cart-info';
import Header from '../scenes/Header';
import ShoppingCarIcon from './cart-icon.js';
import Form from '../scenes/Form';
import Success from '../scenes/Succes';

    export const StackProducts = StackNavigator({
        CatalogScreen: { 
            screen: Catalog,
        },
        CatalogDetailScreen: { screen: CatalogDetail },
        CartScreen: { screen: Cart },
        FormScreen: { screen: Form },
        SuccessScreen: { screen: Success},
        ProfileScreen: { 
            screen: Profile,
            navigationOptions:{
                title: 'Perfil'
            }
        },
        HeaderScreen: { screen: Header },
    },
    {
        initialRouteName: 'CatalogScreen',
        navigationOptions: {
            headerTitle: 'Mi Tienda',
            headerBackTitle: 'Atras',
            //getturesEnabled: true
            //headerTitleAllowFontScaling: true,
            headerRight: (
                // <Header/>
                <ShoppingCarIcon/>
            )
        }
    });
    
    export const Drawer = DrawerNavigator({
        StackScren: { screen: StackProducts },
    },{
        drawerWidth: 300,
        contentComponent: SideMenu
    });

    export const SwitchNavigator = createSwitchNavigator({
        Login: Login,
        AuthLoading: AuthLoading,
        App: Drawer
    },{
        initialRouteName: 'AuthLoading',
    });