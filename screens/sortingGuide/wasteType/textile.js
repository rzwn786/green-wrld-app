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
          source={require('../../../asset/type/cloth.png')}
          style={{marginTop: 20, width: 200, height: 200}}
        />
      </View>
      <View>
        <Text
          style={{color: 'black', fontSize: 25, textAlign: 'left', margin: 10}}>
          Textile & Clothes{' '}
        </Text>
        <Text
          style={{color: 'green', fontSize: 15, textAlign: 'left', margin: 10}}>
          Recyclable
        </Text>
        <Text style={{color: 'black', fontSize: 15, marginTop: 10, margin: 10}}>
          Textiles are materials made from fibers, either natural or synthetic,
          that are woven, knitted, or otherwise constructed to create fabrics.
          Textiles encompass a wide range of materials used for clothing,
          household items, and various other applications.
        </Text>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <List.Section>
          <List.Accordion
            title="Object Example"
            style={{backgroundColor: 'white', marginLeft: -8}}>
            <List.Item
              title="Jeans"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Bed Linen"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Shirt"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Curtain"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Towels"
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
          Some recycling centers or thrift stores have designated drop-off
          locations specifically for textiles. They may accept items for reuse
          or proper recycling.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Dryitem;
