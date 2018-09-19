import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    Button,
    StyleSheet
} from 'react-native';

import Home from '../Home';
import Header from '../Header';
import ItemProduct from './components/item-product';
import ItemSeparator from './components/item-separator';
import Api from '../../utils/api';

import HttpProduct from "../../services/Product/http-products";

class Catalog extends Component{

    constructor(props){
        super(props);
        this.state = {
            productList: []
        }
    }

    componentDidMount = () =>{ 
        this.getProducts();
    }

    async getProducts(){
        const data = await HttpProduct.getProducts();
        this.setState({
            productList: data
        });
        console.log(data);
    }

    static navigationOptions = {
        title: 'Catlog',
        headerTitleStyle: {
            fontSize: 18
        },
    }
    renderItem = ( { item }) => <ItemProduct navigation = { this.props.navigation } product = { item } />
    separatorComponent = () => <ItemSeparator />;
    emptyComponent = () => <Text>Products not found </Text>
    keyExtractor = item => item._id.toString();
    
    render(){
        return (
            <View>
                <Home>
                    <Header>
                        <Button
                            title ="Cart"
                            onPress = { ()=> this.props.navigation.navigate('CartScreen') }
                        />
                    </Header>
                    <FlatList
                        data ={ this.state.productList }
                        renderItem={ this.renderItem }
                        ItemSeparatorComponent = { this.separatorComponent }
                        ListEmptyComponent = { this.emptyComponent }
                        keyExtractor = { this.keyExtractor }
                    />
                </Home>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

export default Catalog;