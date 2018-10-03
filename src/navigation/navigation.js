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

    export const StackProducts = StackNavigator({
        CatalogScreen: { 
            screen: Catalog,
            navigationOptions:{
                //title: 'Catalogo de productos'
            }
        },
        CatalogDetailScreen: { screen: CatalogDetail },
        CartScreen: { screen: Cart },
        CartInfoScreen: { screen: CartInfo },
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
        navigationOptions:{
            //headerTitleAllowFontScaling: true,
            headerBackTitle: 'Atras',
            //getturesEnabled: true
        },
    });

    const WithModal = createStackNavigator(
        {
            Main: {
                screen: StackProducts,
            },
            CatalogDetailScreen: { 
                screen: CatalogDetail,
                navigationOptions:{
                    title: 'Product Detail',
                }
            },
        },
        {
            mode: 'modal',
            headerMode: 'none',
            navigationOptions:{
                gesturesEnabled: true
            }
        },
    );

    export const StackCart = StackNavigator({
        CartScreen: { screen: Cart },
        CartInfoScreen: { screen: CartInfo },
    });

    export const Drawer = DrawerNavigator({
        //StackScren: { screen: WithModal },
        StackScren: { screen: StackProducts },
        StackCarScreen: { screen: StackCart },
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