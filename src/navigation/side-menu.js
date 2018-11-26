import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Profile from '../scenes/Profile';

export class SideMenu extends Component {
    
    constructor(props){
        super(props)
    }
    render() {
        return (
        <View style={styles.container}>
                <ScrollView>
                    <Profile navigation = { this.props.navigation }/>

                    <View style={styles.itemSectionNav}>
                        <Text style={styles.textItemSectionNav} onPress={ ()=> this.props.navigation.navigate('StackScren') } > 
                        <Icon name="list-alt" size={24} color="#70b124"/>   Catalogo </Text>
                    </View>

                    <View style={styles.itemSectionNav}>
                        <Text style={styles.textItemSectionNav} onPress={ ()=> this.props.navigation.navigate('CartScreen') } > 
                        <Icon name="shopping-cart" size={24} color="#70b124"/>   Carrito de Compras </Text>
                    </View>


                    <View style={styles.itemSectionNav}>
                        <Text style={styles.textItemSectionNav} onPress={ ()=> this.props.navigation.navigate('Tabs') } > Tabs </Text>
                    </View>

                </ScrollView>
                
                <View style={styles.footerContainer}>
                        <Text> Powered by @alexlondon07</Text>
                </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#ccc'
    },
    itemSectionNav: {
        margin: 10,
        flexDirection: 'row',
        backgroundColor: '#ccc'
    },
    textItemSectionNav:{
        fontSize: 18,
        fontFamily: "IndieFlower"
    },
    footerContainer:{
        padding: 15,
        fontSize: 18,
    }
})

export default SideMenu;