import {View, Text, FlatList, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {Searchbar, RadioButton} from 'react-native-paper';

const Schedule = () => {
  const route = useRoute();
  const {title} = route.params;
  const [schedule, setSchedule] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filterValue, setFilterValue] = useState('all');

  const onChangeSearch = query => setSearchQuery(query);

  const list = firestore().collection(title).limit(1000);
  useEffect(() => {
    const unsubscribe = list.onSnapshot(
      querySnapshot => {
        const schedule = [];
        querySnapshot.forEach(doc => {
          const {Activity, Frequency, Park, Road} = doc.data();
          schedule.push({
            id: doc.id,
            Activity,
            Frequency,
            Park,
            Road,
          });
        });
        setSchedule(schedule);
      },
      error => {
        console.error('Error fetching schedule:', error);
      },
    );

    return () => {
      unsubscribe();
    };
  }, [list]);

  const renderItem = ({item}) => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        borderColor: '#e6e5e3',
        borderWidth: 1,
        borderRadius: 15,
        margin: 10,
      }}>
      <Text style={{color: 'black', textAlign: 'left', fontSize: 20}}>
        Park: {item.Park}
      </Text>
      <Text style={{color: 'black', textAlign: 'left', fontSize: 14}}>
        Road: {item.Road}
      </Text>
      <Text style={{color: 'black', textAlign: 'left', fontSize: 14}}>
        Activity: {item.Activity}
      </Text>
      <Text style={{color: 'black', textAlign: 'left', fontSize: 14}}>
        Frequency: {item.Frequency}
      </Text>
    </View>
  );

  const filteredSchedule = schedule.filter(item => {
    const searchText = searchQuery.toLowerCase();
    const isFilterMatch =
      filterValue === 'all' ||
      (filterValue === 'household' &&
        item.Activity === 'Household Collection') ||
      (filterValue === 'bulky' && item.Activity === 'Bulky Collection');

    const isSearchMatch =
      item.Park.toLowerCase().includes(searchText) ||
      item.Road.toLowerCase().includes(searchText) ||
      item.Activity.toLowerCase().includes(searchText) ||
      item.Frequency.toLowerCase().includes(searchText);

    return isFilterMatch && isSearchMatch;
  });

  const wasteManagementCompany = title => {
    let companyName;

    if (
      title === 'Kuala Lumpur' ||
      title === 'Putrajaya' ||
      title === 'Pahang'
    ) {
      companyName = 'Alam Flora Sdn Bhd';
    } else if (
      title === 'Johor' ||
      title === 'Melaka' ||
      title === 'Negeri Sembilan'
    ) {
      companyName = 'Swm Environment Sdn Bhd';
    } else if (title === 'Selangor') {
      companyName = 'KDEB Waste Management';
    } else if (title === 'Sarawak') {
      companyName = 'Trienekens (Sarawak) Sdn. Bhd';
    } else {
      companyName = 'Unknown Company';
    }

    return companyName;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          color: 'black',
          textAlign: 'center',
          fontSize: 20,
          marginTop: 20,
        }}>
        Schedule for {title}
      </Text>
      <Text
        style={{
          color: 'black',
          textAlign: 'center',
          fontSize: 12,
          marginTop: 5,
        }}>
        Waste Managed By: {wasteManagementCompany(title)}
      </Text>
      <Searchbar
        iconColor="#a3a2a0"
        style={{
          backgroundColor: 'white',
          borderColor: '#a3a2a0',
          borderWidth: 1,
          margin: 15,
        }}
        placeholder="Search"
        placeholderTextColor={'#a3a2a0'}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <RadioButton.Group
        color="#708238"
        onValueChange={newValue => setFilterValue(newValue)}
        value={filterValue}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', color: 'black'}}>
          <RadioButton value="all" />
          <Text style={{color: 'black', fontSize: 15}}>All</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton value="household" />
          <Text style={{color: 'black', fontSize: 15}}>
            Household Collection
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton value="bulky" />
          <Text style={{color: 'black', fontSize: 15}}>Bulky Collection</Text>
        </View>
      </RadioButton.Group>
      <FlatList
        data={filteredSchedule}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Schedule;
