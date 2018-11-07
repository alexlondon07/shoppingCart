import React, { Component } from "react";
import { 
    View
} from 'react-native';
import { connect } from 'react-redux';

import ProductDetail from "./components/product-detail";

class CatalogDetail extends Component {

    constructor(props) {
        super(props);
    }   
    render() {
        return (
            <View>
                <ProductDetail onPressEvent = { this.props.addItemToCart } navigation={ this.props.navigation } />                  
            </View>
        );
    }
}

const mapDispatchToProsp = ( dispatch ) => {
    console.log('hola mapDispatchToProsp');
    return {
        addItemToCart: ( product ) => dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }
}
export default connect(null, mapDispatchToProsp)(CatalogDetail);
