import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const ShoppingCartIcon = (props) => (
    <View style={{ padding: 5 }}>
        <View style={styles.container}>
            <Text style={ styles.carItems}> 0 </Text>
        </View>
        <Icon onPress={() => props.navigation.navigate('Cart')} name="ios-cart" size={30} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: 30, 
        width: 30, 
        borderRadius: 15, 
        backgroundColor: 'rgba(95,197,123,0.8)', 
        right: 15, 
        bottom: 15, 
        alignItems: 'center', 
        justifyContent: 'center', 
        zIndex: 2000
    },
    carItems:{
        color: 'white', 
        fontWeight: 'bold'
    }
});

export default (withNavigation(ShoppingCartIcon));

