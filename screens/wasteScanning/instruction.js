import React, {useState, useRef} from 'react';
import {
  View,
  Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Instruction = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Scanner')}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../asset/icons/scannow.png')}
            style={{marginTop: 20, width: 150, height: 150}}
          />
          <Text style={{color: 'black', marginTop: 15, textAlign: 'center'}}>
            Scan Now
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: 'black',
            textAlign: 'left',
            marginLeft: 10,
            marginTop: 25,
            fontSize: 20,
            textDecorationLine: 'underline',
          }}>
          Instruction
        </Text>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: 'black',
              textAlign: 'left',
              marginLeft: 10,
              marginTop: 25,
              fontSize: 15,
            }}>
            Place the item that shall be disposed of on a flat surface. If the
            surface contains items that should not be disposed of, please put
            those item away from the surface.
          </Text>
          <Image
            source={require('../../asset/img/howto1.jpg')}
            style={{
              width: 250,
              height: 200,
              marginTop: 10,
              borderWidth: 5,
              borderColor: '#708238',
            }}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: 'black',
              textAlign: 'left',
              marginLeft: 10,
              marginTop: 25,
              fontSize: 15,
            }}>
            Make sure the lighting in your location is sufficient for making a
            high quality photo.
          </Text>
          <Image
            source={require('../../asset/img/howto2.jpg')}
            style={{
              width: 250,
              height: 200,
              marginTop: 10,
              borderWidth: 5,
              borderColor: '#708238',
            }}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: 'black',
              textAlign: 'left',
              marginLeft: 10,
              marginTop: 25,
              fontSize: 15,
            }}>
            Point your camera directly at the items. Make sure that the items is
            fully visible in the camera frame and take a photo of the item.
          </Text>
          <Image
            source={require('../../asset/img/howto3.jpg')}
            style={{
              width: 250,
              height: 200,
              marginTop: 10,
              borderWidth: 5,
              borderColor: '#708238',
              marginBottom: 20,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Instruction;
