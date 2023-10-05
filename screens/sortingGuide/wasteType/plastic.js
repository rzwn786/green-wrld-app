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

const Plastic = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('../../../asset/type/plastic.png')}
          style={{marginTop: 20, width: 200, height: 200}}
        />
      </View>
      <View>
        <Text
          style={{color: 'black', fontSize: 25, textAlign: 'left', margin: 10}}>
          Plastic
        </Text>
        <Text
          style={{color: 'green', fontSize: 15, textAlign: 'left', margin: 10}}>
          Recyclable
        </Text>
        <Text style={{color: 'black', fontSize: 15, marginTop: 10, margin: 10}}>
          Plastic is a synthetic material made from polymers, which are large
          molecules composed of repeating smaller units called monomers.
          Plastics are versatile and can be molded into various shapes while
          maintaining their durability.
        </Text>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <List.Section>
          <List.Accordion
            title="Object Example"
            style={{backgroundColor: 'white', marginLeft: -8}}>
            <List.Item
              title="Plastic Bottle"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Platic Cup"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Film"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Plastic Tray"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Folder"
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
          n many places, a blue bin is used to collect plastic item for
          recycling.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Plastic;
