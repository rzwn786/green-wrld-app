import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    title: 'Johor',
    image:
      'https://e0.pxfuel.com/wallpapers/837/578/desktop-wallpaper-johor-flag-silk-wavy-flags-brazilian-states-day-of-johor-fabric-flags-flag-of-johor-3d-art-johor-asia-states-of-malaysia-johor-3d-flag-malaysia.jpg',
  },
  {
    title: 'Kedah',
    image:
      'https://e0.pxfuel.com/wallpapers/543/571/desktop-wallpaper-kedah-flag-silk-wavy-flags-brazilian-states-day-of-kedah-fabric-flags-flag-of-kedah-3d-art-kedah-asia-states-of-malaysia-kedah-3d-flag.jpg',
  },
  {
    title: 'Kelantan',
    image:
      'https://e0.pxfuel.com/wallpapers/11/882/desktop-wallpaper-kelantan-flag-silk-wavy-flags-brazilian-states-day-of-kelantan-fabric-flags-flag-of-kelantan-3d-art-kelantan-asia-states-of-malaysia-kelantan-3d-flag.jpg',
  },
  {
    title: 'Melaka',
    image:
      'https://e0.pxfuel.com/wallpapers/927/376/desktop-wallpaper-malacca-flag-silk-wavy-flags-brazilian-states-day-of-malacca-fabric-flags-flag-of-malacca-3d-art-malacca-asia-states-of-malaysia-malacca-3d-flag.jpg',
  },
  {
    title: 'Negeri Sembilan',
    image:
      'https://e0.pxfuel.com/wallpapers/394/940/desktop-wallpaper-negeri-sembilan-flag-silk-wavy-flags-brazilian-states-day-of-negeri-sembilan-fabric-flags-flag-of-negeri-sembilan-3d-art-negeri-sembilan-asia-states-of-malaysia-negeri-sembilan-3d-flag-malaysia.jpg',
  },
  {
    title: 'Pulau Pinang',
    image:
      'https://e0.pxfuel.com/wallpapers/336/166/desktop-wallpaper-penang-flag-silk-wavy-flags-brazilian-states-day-of-penang-fabric-flags-flag-of-penang-3d-art-penang-asia-states-of-malaysia-penang-3d-flag-malaysia.jpg',
  },
  {
    title: 'Sarawak',
    image:
      'https://e0.pxfuel.com/wallpapers/50/505/desktop-wallpaper-sarawak-flag-silk-wavy-flags-brazilian-states-day-of-sarawak-fabric-flags-flag-of-sarawak-3d-art-sarawak-asia-states-of-malaysia-sarawak-3d-flag-malaysia.jpg',
  },
  {
    title: 'Selangor',
    image:
      'https://e0.pxfuel.com/wallpapers/600/867/desktop-wallpaper-selangor-flag-silk-wavy-flags-brazilian-states-day-of-selangor-fabric-flags-flag-of-selangor-3d-art-selangor-asia-states-of-malaysia-selangor-3d-flag.jpg',
  },
  {
    title: 'Terengganu',
    image:
      'https://e0.pxfuel.com/wallpapers/372/305/desktop-wallpaper-terengganu-flag-silk-wavy-flags-brazilian-states-day-of-terengganu-fabric-flags-flag-of-terengganu-3d-art-terengganu-asia-states-of-malaysia-terengganu-3d-flag.jpg',
  },
  {
    title: 'Kuala Lumpur',
    image:
      'https://e0.pxfuel.com/wallpapers/644/984/desktop-wallpaper-kuala-lumpur-flag-silk-wavy-flags-brazilian-states-day-of-kuala-lumpur-fabric-flags-flag-of-kuala-lumpur-3d-art-kuala-lumpur-asia-states-of-malaysia-kuala-lumpur-3d-flag.jpg',
  },
  {
    title: 'Sabah',
    image:
      'https://e0.pxfuel.com/wallpapers/917/533/desktop-wallpaper-sabah-flag-silk-wavy-flags-malaysian-states-day-of-sabah-fabric-flags-flag-of-sabah-3d-art-sabah-asia-states-of-malaysia-sabah-3d-flag-malaysia.jpg',
  },
  {
    title: 'Putrajaya',
    image:
      'https://e0.pxfuel.com/wallpapers/265/991/desktop-wallpaper-putrajaya-flag-silk-wavy-flags-brazilian-states-day-of-putrajaya-fabric-flags-flag-of-putrajaya-3d-art-putrajaya-asia-states-of-malaysia-putrajaya-3d-flag-malaysia.jpg',
  },
  {
    title: 'Perak',
    image:
      'https://e0.pxfuel.com/wallpapers/959/932/desktop-wallpaper-perak-flag-silk-wavy-flags-brazilian-states-day-of-perak-fabric-flags-flag-of-perak-3d-art-perak-asia-states-of-malaysia-perak-3d-flag.jpg',
  },
  {
    title: 'Pahang',
    image:
      'https://e0.pxfuel.com/wallpapers/855/904/desktop-wallpaper-pahang-flag-silk-wavy-flags-brazilian-states-day-of-pahang-fabric-flags-flag-of-pahang-3d-art-pahang-asia-states-of-malaysia-pahang-3d-flag.jpg',
  },
  {
    title: 'Perlis',
    image:
      'https://e0.pxfuel.com/wallpapers/742/96/desktop-wallpaper-perlis-flag-silk-wavy-flags-brazilian-states-day-of-perlis-fabric-flags-flag-of-perlis-3d-art-perlis-asia-states-of-malaysia-perlis-3d-flag-malaysia.jpg',
  },
];

const StateItem = ({title, image}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Schedule', {title});
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={{
          width: '100%',
          borderWidth: 1,
          borderColor: '#e6e5e3',
          borderRadius: 25,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
        }}
        onPress={handlePress}>
        <Image source={{uri: image}} style={styles.backgroundImage} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Wastecollection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Collection Schedule</Text>
      <FlatList
        data={DATA}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <StateItem title={item.title} image={item.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
    fontSize: 20,
    marginBottom: 20,
  },
  item: {
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
    padding: 10,
  },
});

export default Wastecollection;
