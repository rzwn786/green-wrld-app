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

const Glass = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('../../../asset/type/glass.png')}
          style={{marginTop: 20, width: 200, height: 200}}
        />
      </View>
      <View>
        <Text
          style={{color: 'black', fontSize: 25, textAlign: 'left', margin: 10}}>
          Glass
        </Text>
        <Text
          style={{color: 'green', fontSize: 15, textAlign: 'left', margin: 10}}>
          Recyclable
        </Text>
        <Text style={{color: 'black', fontSize: 15, marginTop: 10, margin: 10}}>
          Glass items refer to objects made from glass material. Glass is a
          versatile and widely used material that can be found in various forms,
          including containers, decorations, and construction materials.
        </Text>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <List.Section>
          <List.Accordion
            title="Object Example"
            style={{backgroundColor: 'white', marginLeft: -8}}>
            <List.Item
              title="Glass Bottles"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Glass Jars"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Window Glass"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Glass Tableware"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Glass Light Bulbs"
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
          In many places, a green bin is used to collect glass item for
          recycling.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Glass;
