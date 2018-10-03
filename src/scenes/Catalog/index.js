import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    Button,
    AsyncStorage
} from 'react-native';

import { SearchBar } from 'react-native-elements';

import Header from '../Header';
import ItemProduct from './components/item-product';
import ItemSeparator from './components/item-separator';
import HttpProduct from "../../services/Product/http-products";
import i18n from './../../i18n';

class Catalog extends Component{

    constructor(props){
        super(props);
        this.state = {
            productList: [],
            arrayholder: []
        }
    }
    componentDidMount = () =>{ 
        this.getProducts();
    }
    /**
     * Metodo para Obtener los Productos de nuestra Api
     */
    async getProducts(){
        const data = await HttpProduct.getProducts();
        this.setState({
            productList: data,
            arrayholder: data,
        });
    }
    renderHeaderSearchBar = () => {
        return (
            <SearchBar
                placeholder={ i18n.t('SEARCH_PRODUCT') }
                lightTheme
                round
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
                clearIcon
                autoFocus={true}
            />
        );
    };
        /**
     * Función para Buscar Productos segun lo que hallan ingresado en el Buscador
     */
    searchFilterFunction = text => {

        const newData = this.state.arrayholder.filter(item => {            
            
            const itemData = `${item.name.toUpperCase()}`;
            const textData = text.toUpperCase();

            //Retorna el Item siempre y cuando exista Información
            return itemData.indexOf(textData) > -1;
        });
        this.setState({ 
            productList: newData,
        });
    };

    renderItem = ( { item }) => <ItemProduct navigation = { this.props.navigation } product = { item } />
    separatorComponent = () => <ItemSeparator />;
    emptyComponent = () => <Text>{ i18n.t('PRODUCTS_NOT_FOUND') }</Text>
    keyExtractor = item => item._id.toString();
    render(){
        return (
            <View>
                <Header/>
                <FlatList
                    data ={ this.state.productList }
                    renderItem={ this.renderItem }
                    ItemSeparatorComponent = { this.separatorComponent }
                    ListEmptyComponent = { this.emptyComponent }
                    keyExtractor = { this.keyExtractor }
                    ListHeaderComponent={this.renderHeaderSearchBar}  
                />
            </View>
        )
    }
}
export default Catalog;