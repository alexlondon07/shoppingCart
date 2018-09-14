import React from 'react';
import { 
    Text, 
    View,
    Image,
    StyleSheet
  } from 'react-native';

  const Profile = props => (
    <View style={styles.profileContainer}>
        <Image
            source = { { uri: 'https://avatars0.githubusercontent.com/u/5550470?s=460&v=4' } }
            style={styles.profileImage}
        />
        <Text style={styles.profileName}> Alexander Londoño </Text>
        <Text style={styles.username}> @alelondon07  </Text>
    </View>
  );

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

  export default Profile;