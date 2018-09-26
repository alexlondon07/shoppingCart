import React, { Component } from 'react';
import { 
    Text, 
    View,
    Image,
    StyleSheet,
    Button,
    AsyncStorage
} from 'react-native';

class ProfileInfo extends Component {
    constructor(props) {
    super(props);
    }
//const Profile = props => (
    render() {
    return (  
        <View style={styles.profileContainer}>
            <Image
                source = { { uri: 'https://avatars0.githubusercontent.com/u/5550470?s=460&v=4' } }
                style={styles.profileImage}
            />
            <Text style={styles.profileName}> Alexander Londoño </Text>
            <Text style={styles.username}> @alexlondon07  </Text>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    profileContainer: {
        paddingTop: 20,
        backgroundColor: '#3949AB',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileTittle:{
        color: '#fff',
        fontSize: 30,
        marginTop: 10
    },
    profileName:{
        color: '#fff',
        fontSize: 24,
        marginTop: 20
    },
    profileImage:{
        width: 140,
        height: 140,
        borderRadius: 70,
        resizeMode: 'cover'
    },
    username:{
        color: '#fff',
        padding: 10
    },
    });

export default ProfileInfo;