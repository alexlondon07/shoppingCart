import React from 'react';
import {
    Text,
    View,
    StyleSheet ,
    Image,
    TouchableHighlight
} from 'react-native';

const ItemProduct = (props) => (
    <TouchableHighlight
        onPress = { ()=> props.navigation.navigate('ProductDetailScreen') }
        underlayColor = "#ccc"
    >
         <View style={ styles.container }>
            <View styles={ styles.left }>
                <Image
                    style={styles.cover}
                    source ={{ uri: props.product.photo }}
                />
                <View style={ styles.reference }>
                    <Text style={ styles.referenceText }>{ props.product.reference }</Text>
                </View>
            </View>
            <View style={ styles.right }>
                <Text style={ styles.title }>{ props.product.name }</Text>
                <Text style={ styles.price }>{ props.product.price }</Text>
                <Text style={ styles.description }>{ props.product.description }</Text>
            </View>
        </View>


    </TouchableHighlight>

);

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    reference:{
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 7,
    },
    referenceText:{
        color: 'white',
        fontSize: 11
    },
    cover:{
        height: 120,
        width: 180,
        resizeMode: 'contain'
    },
    right:{
        paddingLeft: 2,
        justifyContent: 'space-between',

    },
    left:{
        paddingRight: 2,
    },
    title:{
        fontSize: 18,
        color: '#44546b'
    },
    price:{
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 13,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    description:{
        color: '#6b6b6b',
        fontSize: 12,
        fontWeight: 'bold',
    }
    
})

export default ItemProduct;
