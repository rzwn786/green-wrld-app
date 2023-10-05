import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Image,
  Linking,

} from 'react-native';
import React from 'react';
import Header from '../../component/header';
import externalStyle from '../../style/externalStyle';

const Support = () => {
  return (
    <View style={externalStyle.container}>
      <View style={{alignItems: 'center'}}>
        <Header />
        <View style={{alignItems: 'flex-start'}}>
          <Text style={{fontSize: 15, color: 'black', marginLeft: 10}}>
            Send Us Your Feedback or Suggestion
          </Text>
          <TextInput
            style={externalStyle.textInput}
            placeholder="Feedback or Suggestion"
            placeholderTextColor={'#696969'}
            inputMode="email"
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            ToastAndroid.show('Successfully Sent', ToastAndroid.SHORT)
          }>
          <View
            style={{
              backgroundColor: '#708238',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 12,
              margin: 10,
              width: 200,
            }}>
            <Text
              Text
              style={{color: 'white', width: 100, textAlign: 'center'}}>
              Send
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{marginTop: 60, alignItems: 'center'}}>
          <Text style={{fontSize: 15, color: 'black', marginLeft: 10}}>
            Follow our sosial media
          </Text>
          <View style={{flexDirection: 'row', margin: 20, gap: 20}}>
            <TouchableOpacity onPress={() =>Linking.openURL('https://www.facebook.com/profile.php?id=100094163349879')}>
              <Image
                style={{width: 50, height: 50}}
                source={require('../../asset/icons/fbblack.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>Linking.openURL('https://www.instagram.com/greenwrldco/')}>
              <Image
                style={{width: 50, height: 50}}
                source={require('../../asset/icons/igblack.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Support;
