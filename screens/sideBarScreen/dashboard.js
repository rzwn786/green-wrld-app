import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import MapViewComponent from '../../component/MapView';

const Dashboard = () => {
  //to navigate true the app
  const navigation = useNavigation();
  //get current user
  const user = auth().currentUser;
  //get current date
  const [currentDate, setcurrentDate] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const date = new Date(); //current date
    const month = date.toLocaleString('default', {
      month: 'long',
      day: 'numeric',

    setcurrentDate(month);
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesRef = firestore()
          .collection('Articles')
          .where('title', '!=', '')
          .limit(3);
        const querySnapshot = await articlesRef.get();

        const articlesData = querySnapshot.docs.map(doc => {
          const {title, content, image} = doc.data();
          return {
            id: doc.id,
            title,
            content,
            image,
          };
        });
        setArticles(articlesData);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const renderArticleCard = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Articles', {title: item.title})}>
      <View style={{width: 400, height: 250, alignItems: 'center', gap: 10}}>
        <Image style={{height: 200, width: '90%'}} source={{uri: item.image}} />
        <Text style={{color: 'black', textAlign: 'left', fontStyle: 'italic'}}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    //whole screen
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      {/*The Green box that contain user name */}
      <View
        style={{
          backgroundColor: '#708238',
          width: '100%',
          height: 250,
          borderBottomRightRadius: 500,
        }}>
        {/*Welcome Text and Date*/}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 25,
            marginRight: 25,
          }}>
          <Text style={{fontSize: 16, marginTop: 20, color: 'white'}}>
            Welcome,
          </Text>
          <Text style={{fontSize: 14, marginTop: 20, color: 'white'}}>
            {currentDate},
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            textAlign: 'left',
            marginLeft: 25,
            marginBottom: 25,
          }}>
          {user.displayName || user.email}
        </Text>
        {/*Align White Box Xenter*/}
        <View style={{alignItems: 'center'}}>
          {/*The White Box */}
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              height: 230,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: '#e6e5e3',
            }}>
            {/*#1 row*/}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 15,
                justifyContent: 'center',
              }}>
              {/*Recycling Centre */}
              <TouchableOpacity onPress={() => navigation.navigate('Centre')}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../asset/icons/location.png')}
                    style={{marginTop: 20, width: 50, height: 50}}
                  />
                  <Text
                    style={{color: 'black', textAlign: 'center', fontSize: 12}}>
                    Recycling Centre
                  </Text>
                </View>
              </TouchableOpacity>
              {/*Scan Waste */}
              <TouchableOpacity
                onPress={() => navigation.navigate('Instruction')}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../asset/icons/camera.png')}
                    style={{marginTop: 20, width: 50, height: 50}}
                  />
                  <Text
                    style={{color: 'black', textAlign: 'center', fontSize: 12}}>
                    Scan My Waste
                  </Text>
                </View>
              </TouchableOpacity>
              {/*Garbage Collection Schedule*/}
              <TouchableOpacity
                onPress={() => navigation.navigate('Wastecollection')}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../asset/icons/schedule.png')}
                    style={{marginTop: 20, width: 50, height: 50}}
                  />
                  <Text
                    style={{color: 'black', textAlign: 'center', fontSize: 12}}>
                    Waste Collection{'\n'}Schedule
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/*#2 row*/}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
                justifyContent: 'center',
              }}>
              {/*Recycling Guide */}
              <TouchableOpacity onPress={() => navigation.navigate('Guide')}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../asset/icons/idea.png')}
                    style={{marginTop: 20, width: 50, height: 50}}
                  />
                  <Text
                    style={{color: 'black', textAlign: 'center', fontSize: 12}}>
                    Sorting Guide
                  </Text>
                </View>
              </TouchableOpacity>
              {/*Report Waste */}
              <TouchableOpacity
                onPress={() => navigation.navigate('TipsArticlesList')}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../asset/icons/report.png')}
                    style={{marginTop: 20, width: 50, height: 50}}
                  />
                  <Text
                    style={{color: 'black', textAlign: 'center', fontSize: 12}}>
                    Recycling Tips & Article
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 100, gap: 50}}>
        <View>
          <Text
            style={{
              marginLeft: 30,
              color: 'black',
              textAlign: 'left',
              marginBottom: 15,
              marginTop: 20,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Find Recycling Centre Near You
          </Text>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{width: '90%', height: 200, alignItems: 'center'}}
              onPress={() => navigation.navigate('Centre')}>
              <MapViewComponent />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{
              marginLeft: 30,
              color: 'black',
              textAlign: 'left',
              marginBottom: 15,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Browse Our Recycling Articles
          </Text>
          <TouchableOpacity>
            <FlatList
              data={articles}
              renderItem={renderArticleCard}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
