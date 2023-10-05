import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import Home from './screens/authentication/home';
import Signup from './screens/authentication/signup';
import Centre from './screens/recyclingCentre/centre';
import Guide from './screens/sortingGuide/guide';
import Instruction from './screens/wasteScanning/instruction';
import Scanner from './screens/wasteScanning/scanner';
import Result from './screens/wasteScanning/result';
import Wastecollection from './screens/wasteCollectionSchedule/wastecollection';
import Schedule from './screens/wasteCollectionSchedule/schedule';
import TipsArticlesList from './screens/recycleTipsAndArticles/tipsArticlesList';
import Articles from './screens/recycleTipsAndArticles/articles';
import Dryitem from './screens/sortingGuide/wasteType/dry';
import Bulkitem from './screens/sortingGuide/wasteType/bulkitem';
import Foodwaste from './screens/sortingGuide/wasteType/foodwaste';
import Generalwaste from './screens/sortingGuide/wasteType/generalwaste';
import Glass from './screens/sortingGuide/wasteType/glass';
import Medication from './screens/sortingGuide/wasteType/medication';
import Plastic from './screens/sortingGuide/wasteType/plastic';
import Texttile from './screens/sortingGuide/wasteType/textile';
import Ewaste from './screens/sortingGuide/wasteType/ewaste';
import Dashboard from './screens/sideBarScreen/dashboard';
import About from './screens/sideBarScreen/about';
import Support from './screens/sideBarScreen/support';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomDrawer from './navigation/customDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: '',
        drawerLabelStyle: {marginLeft: -15},
        drawerActiveBackgroundColor: '#708238',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'black',
        headerStyle: {backgroundColor: '#708238'},
        headerTintColor: 'white',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: () => (
            <Ionicons name="home-outline" size={22} color={'#1C773D'} />
          ),
        }}
      />
      <Drawer.Screen
        name="FAQs"
        component={About}
        options={{
          drawerIcon: () => (
            <Ionicons name="chatbubbles-outline" size={22} color={'#1C773D'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Support Us"
        component={Support}
        options={{
          drawerIcon: () => (
            <Ionicons name="heart-outline" size={22} color={'#1C773D'} />
          ),
        }}
      />
      {/*<Drawer.Screen name="About" component={About} options={{drawerIcon: () => (<Ionicons name='alert-circle-outline' size={22} color={'#1C773D'}/>)}}  />*/}
    </Drawer.Navigator>
  );
}

function App() {
  SplashScreen.hide();

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: '',
          headerStyle: {backgroundColor: 'white'},
        }}>
        {user ? (
          <>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Instruction" component={Instruction} />
            <Stack.Screen name="Scanner" component={Scanner} />
            <Stack.Screen
              name="Centre"
              component={Centre}
              options={{title: 'test', headerTintColor: 'black'}}
            />
            <Stack.Screen name="Guide" component={Guide} />
            <Stack.Screen name="Result" component={Result} />
            <Stack.Screen name="Wastecollection" component={Wastecollection} />
            <Stack.Screen name="Schedule" component={Schedule} />
            <Stack.Screen name="Articles" component={Articles} />
            <Stack.Screen
              name="TipsArticlesList"
              component={TipsArticlesList}
            />
            <Stack.Screen name="Dryitem" component={Dryitem} />
            <Stack.Screen name="Bulkitem" component={Bulkitem} />
            <Stack.Screen name="Foodwaste" component={Foodwaste} />
            <Stack.Screen name="Generalwaste" component={Generalwaste} />
            <Stack.Screen name="Glass" component={Glass} />
            <Stack.Screen name="Medication" component={Medication} />
            <Stack.Screen name="Plastic" component={Plastic} />
            <Stack.Screen name="Texttile" component={Texttile} />
            <Stack.Screen name="Ewaste" component={Ewaste} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
                swipeEnabled: false,
                drawerItemStyle: {height: 0},
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerShown: false,
                swipeEnabled: false,
                drawerItemStyle: {height: 0},
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
