import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

const Guide = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          marginTop: 10,
          fontSize: 20,
        }}>
        Sorting Guide
      </Text>
      {/*#1 ROW*/}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 25,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Dryitem')}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../asset/type/dry.png')}
              style={{marginTop: 20, width: 100, height: 100}}
            />
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 12,
                marginTop: 10,
              }}>
              DRY ITEM
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Bulkitem')}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../asset/type/bulk.png')}
              style={{marginTop: 20, width: 100, height: 100}}
            />
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 12,
                marginTop: 10,
              }}>
              BULK WASTE
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Foodwaste')}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../asset/type/food.png')}
              style={{marginTop: 20, width: 100, height: 100}}
            />
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 12,
                marginTop: 10,
              }}>
              FOOD WASTE
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/*#2 ROW*/}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 25,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Generalwaste')}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../asset/type/general.png')}
              style={{marginTop: 20, width: 100, height: 100}}
            />
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 12,
                marginTop: 10,
              }}>
              GENERAL WASTE
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Glass')}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../asset/type/glass.png')}
              style={{marginTop: 20, width: 100, height: 100}}
            />
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 12,
                marginTop: 10,
              }}>
              GLASS ITEM
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Medication')}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../asset/type/medication.png')}
              style={{marginTop: 20, width: 100, height: 100}}
            />
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 12,
                marginTop: 10,
              }}>
              MEDICATION
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/*#2 ROW*/}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 25,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Plastic')}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../asset/type/plastic.png')}
              style={{marginTop: 20, width: 100, height: 100}}
            />
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 12,
                marginTop: 10,
              }}>
              PLASTIC ITEM
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Ewaste')}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../asset/type/device.png')}
              style={{marginTop: 20, width: 100, height: 100}}
            />
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 12,
                marginTop: 10,
              }}>
              E-WASTE
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Texttile')}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../asset/type/cloth.png')}
              style={{marginTop: 20, width: 100, height: 100}}
            />
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 12,
                marginTop: 10,
              }}>
              TEXTILES
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Guide;
