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

const Foodwaste = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('../../../asset/type/food.png')}
          style={{marginTop: 20, width: 200, height: 200}}
        />
      </View>
      <View>
        <Text
          style={{color: 'black', fontSize: 25, textAlign: 'left', margin: 10}}>
          Food Waste
        </Text>
        <Text
          style={{color: 'green', fontSize: 15, textAlign: 'left', margin: 10}}>
          Recyclable
        </Text>
        <Text style={{color: 'black', fontSize: 15, marginTop: 10, margin: 10}}>
          Food waste refers to any edible food that is discarded or goes
          uneaten, whether at home, in restaurants, during food production, or
          at any stage of the food supply chain. This includes food that is
          spoiled, expired, or simply not consumed. Food waste can be solid or
          liquid and can encompass a wide range of items, from fruits and
          vegetables to cooked meals and dairy products.
        </Text>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <List.Section>
          <List.Accordion
            title="Object Example"
            style={{backgroundColor: 'white', marginLeft: -8}}>
            <List.Item
              title="Fruits and Vegetables"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Leftovers"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Unfinished Beverages"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Bread and Bakery Items"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Expired Packaged Foods"
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
          Recycling food waste means turning it into something useful. One way
          is composting, where food breaks down naturally and becomes good soil
          for plants. You can do this at home or some places collect food waste
          to make compost.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Foodwaste;
