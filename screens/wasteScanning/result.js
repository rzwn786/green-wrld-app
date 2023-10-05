import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';

const Result = () => {
  const route = useRoute();
  const {objectNames} = route.params;
  const navigation = useNavigation();

  //'Dry Recyclables'
  if (objectNames.includes('paper' || 'cardboard' || 'container' || 'box')) {
    Alert.alert('Detected: Dry Item \n ', '', [
      {
        text: 'Exit to Dashboard',
        onPress: () => {
          navigation.navigate('Dashboard');
        },
      },
      {
        text: 'Scan Again',
        onPress: () => {
          navigation.navigate('Instruction');
        },
      },
      {
        text: 'See Detail about dry item',
        onPress: () => {
          navigation.navigate('Dryitem');
        },
      },
    ]);
  }
  //Bulky Waste
  else if (objectNames.includes('wood' || 'furniture')) {
    Alert.alert('Is this Bulk Item ?', '', [
      {
        text: 'Yes',
        onPress: () => {
          navigation.navigate('Bulkitem');
        },
      },
      {
        text: 'No , Capture the item again',
        onPress: () => {
          navigation.navigate('Instruction');
        },
      },
    ]);
  }
  //Food Waste
  else if (objectNames.includes('food')) {
    Alert.alert('Is this Food ?', '', [
      {
        text: 'Yes',
        onPress: () => {
          navigation.navigate('Foodwaste');
        },
      },
      {
        text: 'No , Capture the item again',
        onPress: () => {
          navigation.navigate('Instruction');
        },
      },
    ]);
  }
  //General Waste
  else if (
    objectNames.includes(
      'tooth brush' ||
        'bandage' ||
        'pen' ||
        'Tableware' ||
        'Cigarette' ||
        'tobacco',
    )
  ) {
    Alert.alert('Is this General Waste ?', '', [
      {
        text: 'Yes',
        onPress: () => {
          navigation.navigate('Generalwaste');
        },
      },
      {
        text: 'No , Capture the item again',
        onPress: () => {
          navigation.navigate('Instruction');
        },
      },
    ]);
  }
  //Glass
  else if (
    objectNames.includes(
      'glass items' ||
        'ceramic' ||
        'glass' ||
        'tea' ||
        'coffee' ||
        'cup' ||
        'eyeglasses',
    )
  ) {
    Alert.alert('Is this Glass ?', '', [
      {
        text: 'Yes',
        onPress: () => {
          navigation.navigate('Glass');
        },
      },
      {
        text: 'No , Capture the item again',
        onPress: () => {
          navigation.navigate('Instruction');
        },
      },
    ]);
  }
  //Medication
  else if (objectNames.includes('medicine' || 'healthcare')) {
    Alert.alert('Is this Medication ?', '', [
      {
        text: 'Yes',
        onPress: () => {
          navigation.navigate('Medication');
        },
      },
      {
        text: 'No , Capture the item again',
        onPress: () => {
          navigation.navigate('Instruction');
        },
      },
    ]);
  }
  //Plastic
  else if (objectNames.includes('plastic')) {
    Alert.alert('Is this Plastic ?', '', [
      {
        text: 'Yes',
        onPress: () => {
          navigation.navigate('Plastic');
        },
      },
      {
        text: 'No , Capture the item again',
        onPress: () => {
          navigation.navigate('Instruction');
        },
      },
    ]);
  }
  //Textile
  else if (objectNames.includes('cloth')) {
    Alert.alert('Is this Texttile ?', '', [
      {
        text: 'Yes',
        onPress: () => {
          navigation.navigate('Texttile');
        },
      },
      {
        text: 'No , Capture the item again',
        onPress: () => {
          navigation.navigate('Instruction');
        },
      },
    ]);
  }
  //E-Waste
  else if (objectNames.includes('technology' || 'electronics' || 'desktop')) {
    Alert.alert('Is this Electronic ?', '', [
      {
        text: 'Yes',
        onPress: () => {
          navigation.navigate('Ewaste');
        },
      },
      {
        text: 'No , Capture the item again',
        onPress: () => {
          navigation.navigate('Instruction');
        },
      },
    ]);
  } else {
    Alert.alert('No Item Detected', '', [
      {
        text: 'Scan object again',
        onPress: () => {
          navigation.navigate('Instruction');
        },
      },
      {
        text: 'See Recycling Guide',
        onPress: () => {
          navigation.navigate('Guide');
        },
      },
    ]);
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} />
  );
};

export default Result;
