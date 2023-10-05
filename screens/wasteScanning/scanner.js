import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {Camera} from 'expo-camera';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Scanner = () => {
  const API_KEY = '89cad73c5d8d463494173c369a169f35';
  const API_URL =
    'https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/outputs';

  const cameraRef = useRef(null);

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null); // Add capturedImage state
  const navigation = useNavigation();

  const wasteCategories = {
    Dryitem: [
      'paper',
      'cardboard',
      'container',
      'box',
      'newspaper',
      'catalogs',
      'book',
      'boxes',
      'cans',
      'cutlery',
    ],
    Bulkitem: [
      'appliances',
      'bicycles',
      'car parts',
      'metal structures',
      'wooden',
    ],
    //Foodwaste: ['food', 'bakery', 'fresh', 'kitchen'],
    Glass: ['glass', 'glass items', 'transparent'],
    //Medication:["medicine","healthcare",],
    Plastic: ['plastic', 'container', 'wear', 'fashion', 'outfit', 'outerwear'],
    Texttile: ['cloth', 'shirt', 'clothing', 'short', 'pant', 'linen'],
    Ewaste: [
      'electronic',
      'device',
      'circuit',
      'technology',
      'laptop', //add desktop later on real device
    ],
  };

  const matchingKeyword = [];

  useEffect(() => {
    const handleCameraPermission = async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      if (status === 'granted') {
        setIsCameraOpen(true);
      }
    };

    handleCameraPermission();
  }, []);

  const handleImageUpload = async () => {
    try {
      if (cameraRef.current) {
        setIsLoading(true);

        const photo = await cameraRef.current.takePictureAsync({
          base64: true,
          aspect: [4, 3],
          quality: 0.5,
        });

        setCapturedImage(photo.uri); // Set the captured image URI

        const response = await axios.post(
          API_URL,
          {
            inputs: [
              {
                data: {
                  image: {
                    base64: photo.base64,
                  },
                },
              },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Key ${API_KEY}`,
            },
          },
        );

        // Parse the response to extract the detected objects
        const objects = response.data.outputs[0].data.concepts;
        console.log(objects);

        // Object name in json
        const objectNames = objects.map(object => object.name);
        console.log(objectNames);

        // Iterate through each waste category
        for (const category in wasteCategories) {
          // Check if the category itself is in the predictions
          if (objectNames.includes(category)) {
            matchingKeyword.push(category);
          }
          // Check if any of the attributes are in the predictions
          else {
            const attributes = wasteCategories[category];
            if (
              attributes.some(attributes => objectNames.includes(attributes))
            ) {
              matchingKeyword.push(category);
            }
          }
        }

        if (matchingKeyword.length == 1) {
          Alert.alert(
            `Found matching categories: ${matchingKeyword.join(', ')}`,
            '',
            [
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
                text: 'See Waste Details',
                onPress: () => {
                  // Navigate to the category page
                  navigation.navigate(`${matchingKeyword}`); // Replace 'Categories' with your actual category screen name
                },
              },
            ],
          );
        } else if (matchingKeyword.length >= 2) {
          Alert.alert(
            `Found matching categories: ${matchingKeyword.join(', ')}`,
            '',
            [
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
                text: 'See Sorting Guide For This Categories',
                onPress: () => {
                  // Navigate to the category page
                  navigation.navigate('Guide'); // Replace 'Categories' with your actual category screen name
                },
              },
            ],
          );
        } else {
          Alert.alert(
            'No Object Found',
            'Point your camera directly at the object you want to scan or use another angle',
            [
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
            ],
          );
        }
      }
    } catch (error) {
      console.error('Error detecting objects:', error);
      Alert.alert('Error detecting', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {capturedImage ? (
        <Image
          source={{uri: capturedImage}}
          style={{width: '100%', height: '80%'}}
        />
      ) : (
        <View style={{width: '100%', height: '80%', position: 'relative'}}>
          <Camera ref={cameraRef} style={{width: '100%', height: '100%'}} />
          {/* Add corner borders */}
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 30,
              height: 30,
              borderColor: 'white',
              margin: 50,
              borderTopWidth: 2,
              borderLeftWidth: 2,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 30,
              height: 30,
              borderColor: 'white',
              margin: 50,
              borderTopWidth: 2,
              borderRightWidth: 2,
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 30,
              height: 30,
              borderColor: 'white',
              margin: 50,
              borderBottomWidth: 2,
              borderLeftWidth: 2,
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 30,
              height: 30,
              borderColor: 'white',
              margin: 50,
              borderBottomWidth: 2,
              borderRightWidth: 2,
            }}
          />
        </View>
      )}
      <View style={{flex: 1, alignItems: 'center'}}>
        {isLoading && (
          <View
            style={{
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator
              style={{
                position: 'absolute',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: 70,
                height: 70,
              }}
              size="large"
              color="#708238"
            />
            <Text style={{textAlign: 'center', color: 'black', marginTop: 70}}>
              This process might take up to 1 minute
            </Text>
          </View>
        )}
        {!isLoading && (
          <TouchableOpacity onPress={handleImageUpload} disabled={isLoading}>
            <View
              style={{
                backgroundColor: '#708238',
                borderRadius: 70 / 2,
                width: 70,
                height: 70,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 55 / 2,
                  width: 55,
                  height: 55,
                }}
              />
            </View>
            <Text style={{textAlign: 'center', color: '#708238'}}>
              Scan Object
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Scanner;
