import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const MapViewComponent = () => {
  const [position, setPosition] = useState({
    latitude:3.2354741008771333, 
    longitude: 101.67899561682333,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  });

  const [recyclingCenters, setRecyclingCenters] = useState([]);
  const mapCustomStyle = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#b1bf35"},{"visibility":"on"}]}]

  useEffect(() => {
    // Fetch recycling centers near the user's location
    fetchRecyclingCenters();
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (pos) => {
        const crd = pos.coords;
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0421,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const fetchRecyclingCenters = async () => {
    try {
      // Get the user's current location
      Geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;

        // Fetch recycling centers using the Google Places API
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=recycling_center&keyword=recycling_center&key=`
        );

        const data = await response.json();

        if (data.status === 'OK') {
          // Extract the relevant details from the API response
          const recyclingCenters = data.results.map((result) => ({
            name: result.name,
            latitude: result.geometry.location.lat,
            longitude: result.geometry.location.lng,
          }));

          // Set the recycling centers to the state variable
          setRecyclingCenters(recyclingCenters);
        }
      });
    } catch (error) {
      console.error('Error fetching recycling centers:', error);
    }
  };


  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    chipsItem: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 8,
      paddingHorizontal: 20,
      marginHorizontal: 10,
      height: 35,
      shadowColor: '#ccc',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    scrollView: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    card: {

      elevation: 2,
      backgroundColor: 'white',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      marginHorizontal: 5,
      shadowColor: '#000',
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: {x: 2, y: -2},
      overflow: 'hidden',
      height: 200,
      width: 250,
    },
    cardImage: {
      flex: 3,
      width: '100%',
      height: '100%',
      alignSelf: 'center',
    },
    textContent: {
      flex: 2,
      padding: 10,
    },
    cardtitle: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'black',
    },
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={position}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        showsCompass={true}
        pitchEnabled={true}
        moveOnMarkerPress={false}
        showsPointsOfInterest={false}
        customMapStyle={mapCustomStyle}
      >
        {recyclingCenters.map((center, index) => (
          <Marker
            title={center.name}
            icon={center.photo}
            pinColor={'red'}
            key={index}
            coordinate={{
              latitude: center.latitude,
              longitude: center.longitude,
            }}
          />
        ))}
      </MapView>
    </View>
  );
};

export default MapViewComponent;
