import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native'; // Import useRoute
import {Text, View, Image, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Articles = () => {
  const [article, setArticle] = useState(null);
  const route = useRoute();
  const {title} = route.params;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articlesRef = firestore()
          .collection('Articles')
          .where('title', '==', title);

        const querySnapshot = await articlesRef.get();

        if (querySnapshot.docs.length === 1) {
          const doc = querySnapshot.docs[0];
          const {title, content, image} = doc.data();
          const articleData = {
            id: doc.id,
            title,
            content,
            image,
          };
          setArticle(articleData);
        } else {
          // Handle the case when there are no articles found or multiple articles with the same title
          console.error(
            'Error: No article found or multiple articles with the same title',
          );
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [title]); // Add title as a dependency

  if (!article) {
    // Render a loading indicator or error message if the article is not available yet
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text
          style={{
            color: 'black',
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: 25,
          }}>
          {article.title}
        </Text>
        <Image
          source={{uri: article.image}}
          style={{
            width: '90%',
            height: 200,
            borderRadius: 20,
            marginTop: 20,
            marginBottom: 20,
          }}
        />
        <Text style={{color: 'black', textAlign: 'left', fontSize: 16}}>
          {article.content}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Articles;
