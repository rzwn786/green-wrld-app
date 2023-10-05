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

const Bulkitem = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('../../../asset/type/bulk.png')}
          style={{marginTop: 20, width: 200, height: 200}}
        />
      </View>
      <View>
        <Text
          style={{color: 'black', fontSize: 25, textAlign: 'left', margin: 10}}>
          Bulk Item
        </Text>
        <Text
          style={{color: 'green', fontSize: 15, textAlign: 'left', margin: 10}}>
          Recyclable
        </Text>
        <Text style={{color: 'black', fontSize: 15, marginTop: 10, margin: 10}}>
          A "bulk item" typically refers to a large or oversized item that
          doesn't fit into a regular trash bin or container. These items are
          often too big, heavy, or awkward to be disposed of through normal
          waste collection methods. Bulk items can't be easily handled by
          regular garbage trucks or facilities.
        </Text>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <List.Section>
          <List.Accordion
            title="Object Example"
            style={{backgroundColor: 'white', marginLeft: -8}}>
            <List.Item
              title="Furniture"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Appliances"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Large Electronics"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Mattresses"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Tree"
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
          Contact your local waste management or check the waste collection
          schedules in this app or their website.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Bulkitem;
