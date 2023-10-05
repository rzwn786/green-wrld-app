import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const TipsArticlesList = () => {
  //to navigate true the app
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesRef = firestore()
          .collection('Articles')
          .where('title', '!=', '');
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
        onPress={() => navigation.navigate('Articles', {title: item.title})}>
        <Image source={{uri: item.image}} style={styles.backgroundImage} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recycling Tips & Articles Schedule</Text>
      <FlatList
        data={articles}
        renderItem={renderArticleCard}
        keyExtractor={item => item.id}
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
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
    padding: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default TipsArticlesList;
