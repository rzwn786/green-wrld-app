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

const Generalwaste = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('../../../asset/type/general.png')}
          style={{marginTop: 20, width: 200, height: 200}}
        />
      </View>
      <View>
        <Text
          style={{color: 'black', fontSize: 25, textAlign: 'left', margin: 10}}>
          General Waste
        </Text>
        <Text
          style={{color: 'red', fontSize: 15, textAlign: 'left', margin: 10}}>
          Non-Recyclable
        </Text>
        <Text style={{color: 'black', fontSize: 15, marginTop: 10, margin: 10}}>
          General waste, also known as residual waste or non-recyclable waste,
          refers to the category of waste that is not easily recyclable or fit
          for composting. It encompasses materials that are typically disposed
          of in landfills or incinerated because they lack practical recycling
          or recovery options.
        </Text>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <List.Section>
          <List.Accordion
            title="Object Example"
            style={{backgroundColor: 'white', marginLeft: -8}}>
            <List.Item
              title="Toothbrush"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Bandage"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Cigarette butt"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Chewing gum"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Leaves"
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
          On scheduled collection days, place your sealed trash bags or bins at
          the designated pickup spot for collection by waste management trucks.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Generalwaste;
