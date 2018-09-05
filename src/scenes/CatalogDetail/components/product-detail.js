import React , {Component}from 'react';
import {
    Platform,
    Text, 
    View,
    Image,
    StyleSheet,
} 
from 'react-native';
import Api from '../../../utils/api';


class ProductDetail extends Component{
  
    constructor(props){
        super(props);
        this.state = {
            product: []
        }
    }
    componentDidMount = () =>{ 
     id = this.props.navigation.getParam('id', 'no-data') ;
      //Invoke service
      Api.getProductsById(id)
       .then( data => {
       this.setState({
           product: data
       })
       console.log(data)
       })
       .catch( error => console.log(error) );
   }

  render(){
    return (
      <View style={styles.container}>
      <View style={styles.dataContainer}>
          <View style={styles.brand}>
            <Text style={styles.brandText}> { this.state.product.brand } </Text>    
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>{ this.state.product.name }</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image}  source={{ uri: this.state.product.avatar  }} />        
          </View>
          <View style={styles.description}>
            <Text style={styles.priceText}> $ { this.state.product.price } </Text>
            <Text style={styles.descriptionText}>{ this.state.product.description } </Text>
          </View>  
        </View>
      </View>
    );
  }
}
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
  brand: {
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
  brandText: {
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

export default ProductDetail;
