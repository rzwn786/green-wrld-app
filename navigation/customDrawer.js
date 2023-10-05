import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {signOutUser} from '../utils/utilities';

const CustomDrawer = props => {
  const handleSignOut = () => {
    try {
      signOutUser();
    } catch (error) {
      console.log(error);
    }
  };

  const user = auth().currentUser;

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#708238'}}>
        <ImageBackground
          source={require('../asset/img/olive.jpg')}
          style={{padding: 20}}>
          <Image
            source={{uri: user.photoURL} || require('../asset/img/google.png')}
            style={{width: 80, height: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text style={{color: 'white', fontSize: 15}}>
            {user.displayName || user.email}
          </Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: 'black'}}>
        <TouchableOpacity style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} color="#1C773D" />
            <Text style={{color: 'black', marginLeft: 15}}>Tell a friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical: 15}} onPress={handleSignOut}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} color="#1C773D" />
            <Text style={{color: 'black', marginLeft: 15}}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
