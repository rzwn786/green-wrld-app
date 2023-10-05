import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../component/header';
import {List} from 'react-native-paper';

const About = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{alignItems: 'center'}}>
        <Header />
      </View>
      <View style={{backgroundColor: 'white'}}>
        <List.Section>
          <List.Accordion
            title="What is the purpose of Green Wrld app ?"
            style={{backgroundColor: 'white'}}>
            <Text
              style={{
                alignItems: 'center',
                fontWeight: 'bold',
                flexWrap: 'wrap',
                margin: 10,
                fontSize: 15,
              }}>
              Green Wrld is a mobile application that encourages individuals to
              engage in environmental sustainability and recycling.
            </Text>
          </List.Accordion>
          <List.Accordion
            title="What are the key features of the app?"
            style={{backgroundColor: 'white'}}>
            <Text
              style={{
                alignItems: 'center',
                fontWeight: 'bold',
                flexWrap: 'wrap',
                margin: 10,
                fontSize: 15,
              }}>
              Green Wrld simplifies recycling with features like a Waste
              Collection Schedule to manage pickup days, Waste Image Recognition
              for easy item identification, a Recycling Centre Locator to find
              nearby centers, Recycling Tips and Articles for guidance on best
              practices, and a Waste Sorting Tutorial to become a recycling pro.
              It's your go-to app for convenient and effective recycling.{' '}
            </Text>
          </List.Accordion>
          <List.Accordion
            title="Is the app free to download and use ?"
            style={{backgroundColor: 'white'}}>
            <Text
              style={{
                alignItems: 'center',
                fontWeight: 'bold',
                flexWrap: 'wrap',
                margin: 10,
                fontSize: 15,
              }}>
              Yes, the Green Wrld app is absolutely free to download and use,
              and it will always remain free. Our commitment is to make
              recycling and sustainability accessible to everyone, and we
              believe in providing a valuable resource at no cost to you. Enjoy
              using the app to make a positive impact on our environment!{' '}
            </Text>
          </List.Accordion>
        </List.Section>
      </View>
    </View>
  );
};

export default About;
