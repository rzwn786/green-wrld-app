import React, {useState, useRef, useEffect} from 'react';
import {
  ScrollView,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {List} from 'react-native-paper';

const Dryitem = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('../../../asset/type/dry.png')}
          style={{marginTop: 20, width: 200, height: 200}}
        />
      </View>
      <View>
        <Text
          style={{color: 'black', fontSize: 25, textAlign: 'left', margin: 10}}>
          Dry Item
        </Text>
        <Text
          style={{color: 'green', fontSize: 15, textAlign: 'left', margin: 10}}>
          Recyclable
        </Text>
        <Text style={{color: 'black', fontSize: 15, marginTop: 10, margin: 10}}>
          Dry items are generally solid materials that can be recycled. These
          materials are often separated from wet or organic waste, which might
          include food scraps or liquids, and then processed through recycling
          systems to be repurposed into new products.
        </Text>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <List.Section>
          <List.Accordion
            title="Object Example"
            style={{backgroundColor: 'white', marginLeft: -8}}>
            <List.Item
              title="Paper"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Metals"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Cans"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Food Container"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Envelopes"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
          </List.Accordion>
        </List.Section>
      </View>
      <View>
        <Text
          style={{color: 'black', fontSize: 16, textAlign: 'left', margin: 10}}>
          How to Recycle :
        </Text>
        <Text
          style={{color: 'black', fontSize: 15, margin: 10, marginBottom: 50}}>
          In many places, a blue bin is used to collect dry item for recycling.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Dryitem;
