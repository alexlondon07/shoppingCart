import React from 'react';
import {
    Text, 
    View,
    Image,
    StyleSheet,
    Button,
    Dimensions,
    Colors
} 
from 'react-native';

  const ItemProductDetail = props => ( 
    <View style={styles.container}>
     <View style={styles.dataContainer}>
        <View style={styles.reference}>
          <Text style={styles.referenceText}>REF-D01</Text>    
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Donas de fresas</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image}  source={{ uri: 'https://png.pngtree.com/element_pic/16/12/01/89815cd0e8828d5b9e66af21f83a7102.jpg' }} />        
        </View>
        <View style={styles.description}>
          <Text style={styles.priceText}> $ 5.000 </Text>
          <Text style={styles.descriptionText}>Donas de fresa con chocolate </Text>
        </View>  
      </View>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#3949AB',
      justifyContent: 'center',
      alignItems: 'center'
    },
    dataContainer: {
      color: '#fff',
      borderRadius: 5,
      borderWidth: 0,
      padding: 15,
      marginLeft: 15,
      marginTop: 15
    },
    reference: {
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerText: {
      color: '#fff',
      fontSize: 16,
      marginBottom: 10,
      fontWeight: "bold"
    },
    titleText: {
      color: '#fff',
      fontSize: 18,
      marginBottom: 5,
      fontWeight: "bold"
    },
    referenceText: {
      color: '#fff',
      fontSize: 16,
      marginBottom: 5,
      fontWeight: "bold"
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {  
      height: 200,
      width: 250,
    },
    price:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    priceText:{
      backgroundColor: '#70b124',
      color: 'white',
      fontSize: 20,
      borderRadius: 5,
      alignItems: 'center',
      lineHeight: 30
      
    },
    description: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    descriptionText: {
      color: '#fff',
      fontSize: 18,
      lineHeight: 30
    },
    });

export default ItemProductDetail;
