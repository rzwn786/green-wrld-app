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

const Medication = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('../../../asset/type/medication.png')}
          style={{marginTop: 20, width: 200, height: 200}}
        />
      </View>
      <View>
        <Text
          style={{color: 'black', fontSize: 25, textAlign: 'left', margin: 10}}>
          Medication
        </Text>
        <Text
          style={{color: 'green', fontSize: 15, textAlign: 'left', margin: 10}}>
          Recyclable
        </Text>
        <Text style={{color: 'black', fontSize: 15, marginTop: 10, margin: 10}}>
          Medication, also known as medicine or pharmaceuticals, refers to
          substances or compounds that are used to treat, prevent, or alleviate
          medical conditions, symptoms, or diseases in humans and animals.
          Medications can come in various forms, such as pills, capsules,
          liquids, creams, injections, and more.
        </Text>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <List.Section>
          <List.Accordion
            title="Object Example"
            style={{backgroundColor: 'white', marginLeft: -8}}>
            <List.Item
              title="Pills or Tablets"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Capsules"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Liquid Medications"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Inhalers"
              left={props => <List.Icon {...props} icon="cards-diamond" />}
            />
            <List.Item
              title="Injectables"
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
          If you have unused or expired medications that you need to dispose of
          safely, one option is to take them to a hospital or healthcare
          facility. Many hospitals have specific programs or collection points
          for medication disposal
        </Text>
      </View>
    </ScrollView>
  );
};

export default Medication;
