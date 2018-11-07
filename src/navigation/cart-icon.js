import React from 'react';
import { View , TouchableHighlight, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';

const ShoppingCarIcon =  props => (
    <View>
        <TouchableHighlight
        onPress = { ()=> props.navigation.navigate('CartScreen') }
        underlayColor = "#ccc">
            <View>
                <Text style = { styles.badgettext}> {props.cartItems.length } </Text>
                <Icon
                name='cart'
                type='evilicon'
                color='#517fa4'
                />
            </View>
        </TouchableHighlight>
    </View>
);

const mapDispatchToProsp = ( state ) => {
    return {
        cartItems: state
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 5
    },
    badget: {
        position: 'absolute',
        height: 30,
        width: 30,
        backgroundColor: 'red',
        right: 15, 
        bottom: 15,
    },
    badgetText: {
        fontWeight: 'bold',
        fontSize: 14,
    }
})


export default connect(mapDispatchToProsp, null)(ShoppingCarIcon);
