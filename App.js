import React, { Component } from "react";

import { StackNavigator } from "react-navigation";

import Catalog from "./src/scenes/Catalog";
import ItemProductDetail from "./src/scenes/Catalog/components/item-product-detail";
import Cart from "./src/scenes/Cart";
import Home from "./src/scenes/Home";
import Form from "./src/scenes/Form";
import Success from "./src/scenes/Succes";

const AppNavigator = StackNavigator(
  {
    HomeScreen :{
      screen: Home,
      navigationOptions: () => ({
        title: 'Home'
      })
    },
    CatalogScreen :{
      screen: Catalog,
      navigationOptions: () => ({
        title: 'Catalog'
      })
    },
    ProductDetailScreen :{
      screen: ItemProductDetail,
      navigationOptions: () => ({
        title: 'Product Detail'
      })
    },
    CartScreen :{
      screen: Cart,
      navigationOptions: () => ({
        title: 'Cart'
      })
    },  
    FormScreen :{
      screen: Form,
      navigationOptions: () => ({
        title: 'Form'
      })
    }, 
    SuccessScreen :{
      screen: Success,
      navigationOptions: () => ({
        title: 'Success'
      })
    }, 
  },
  {
    initialRouteName: 'CatalogScreen',
    navigationOptions : {
      title: 'View Products',
      headerStyle: {
          backgroundColor: '#3949AB',
          borderBottomColor: '#3949AB',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: '500',
          fontSize: 26
      },
    }
  }
);

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return <AppNavigator />;
  }
}
