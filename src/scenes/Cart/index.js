import React, { Component } from "react";
import { 
    View
} from 'react-native';
import { connect } from 'react-redux';
import CartList from "./components/cart-list";
import { removeProductFromCart } from '../../actions/cart-actions';

class Cart extends Component {
    constructor(props) {
        super(props);
    }   
    render() {
        return (
            <View>
                <CartList 
                    onPressEvent={ this.props.removeItem }
                    navigation={ this.props.navigation }
                />            
            </View>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch(removeProductFromCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
