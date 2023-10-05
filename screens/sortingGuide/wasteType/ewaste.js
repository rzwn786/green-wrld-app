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

const Ewaste = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('../../../asset/type/device.png')}
          style={{marginTop: 20, width: 200, height: 200}}
        />
      </View>
      <View>
        <Text
          style={{color: 'black', fontSize: 25, textAlign: 'left', margin: 10}}>
          E-Waste
        </Text>
        <Text
          style={{color: 'green', fontSize: 15, textAlign: 'left', margin: 10}}>
          Recyclable
        </Text>
        <Text style={{color: 'black', fontSize: 15, marginTop: 10, margin: 10}}>
          Electronic waste or e-waste describes discarded electrical or
          electronic devices. It is also commonly known as waste electrical and
          electronic equipment or end-of-life electronics.
        </Text>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <List.Section>
          <List.Accordion
            title="Object Example"
            style={{backgroundColor: 'white', marginLeft: -8}}>
            <List.Item
              title="Smartphones"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Laptops/Computers"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Televisions"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Printers"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Small Appliances"
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
          To recycle e-waste, first, learn your local recycling rules. Use
          manufacturer programs, recycling centers, or retailers with drop-off
          spots. Before recycling, remove batteries, separate parts, and erase
          personal data. This helps reduce the impact of e-waste and supports
          responsible recycling.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Ewaste;
