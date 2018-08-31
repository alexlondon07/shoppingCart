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

class Catalog extends Component{

    constructor(props){
        super(props);
        this.state = {
            productList: []
        }
    }

    componentDidMount = () =>{
        const list = [
            {
                id: 1,
                name: "Donas de fresas",
                description: "Donas de fresa con chocolate",
                reference: "REF-D01",
                status: "inactive",
                photo: 'https://png2.kisspng.com/20180328/dgq/kisspng-donuts-frosting-icing-t-shirt-sprinkles-clip-art-homero-5abc5c53002ba6.0250195715222938430007.png',
                price : 4300
            },
            {
                id: 2,
                name: "Dona de coco",
                description: "Con coco y arequipe",
                reference: "REF-D02",
                status: "active",
                photo: 'https://clip2art.com/images/drawn-dougnut-png-tumblr-transparent-7.png',
                price : 4000
            },
            {
                id: 3,
                name: "Donas de crema",
                description: "Con crema de leche y dulce",
                reference: "REF-D03",
                status: "active",
                photo: 'https://openclipart.org/image/2400px/svg_to_png/248890/Brown-Donut.png',
                price : 880
            },
            {
                id: 4,
                name: "Donas de fresas",
                description: "Con fresa con chocolate",
                reference: "REF-D04",
                status: "inactive",
                photo: 'https://png2.kisspng.com/20180328/dgq/kisspng-donuts-frosting-icing-t-shirt-sprinkles-clip-art-homero-5abc5c53002ba6.0250195715222938430007.png',
                price : 4300
            },
            {
                id: 5,
                name: "Dona de coco",
                description: "Con coco y arequipe",
                reference: "REF-D05",
                status: "active",
                photo: 'https://clip2art.com/images/drawn-dougnut-png-tumblr-transparent-7.png',
                price : 4000
            },
            {
                id: 6,
                name: "Donas de crema",
                description: "Con crema de leche y dulce",
                reference: "REF-D06",
                status: "active",
                photo: 'https://openclipart.org/image/2400px/svg_to_png/248890/Brown-Donut.png',
                price : 880
            },
        ];
        this.setState ({
            productList: list
        });
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
    keyExtractor = item => item.id.toString();
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