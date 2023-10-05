import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Header from '../../component/header';
import externalStyle from '../../style/externalStyle';
import {useNavigation} from '@react-navigation/native';
import {
  SignInWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
} from '../../utils/utilities';

const Home: () => Node = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState({});

  //Error Hanlding
  const getErrors = (email, password) => {
    const errors = {};
    //email
    if (!email) {
      errors.email = 'Please Enter Email';
    } else if (!email.includes('@') || !email.includes('.com')) {
      errors.email = 'Please Enter Valid Email';
    }

    //password
    if (!password) {
      errors.password = 'Enter Password';
    } else if (password.length < 4) {
      errors.password = 'Enter Password of 4 Characters';
    }

    return errors;
  };

  //Handle Registration
  const handleRegister = () => {
    const errors = getErrors(email, password);

    if (Object.keys(errors).length > 0) {
      setShowErrors(true);
      setErrors(showErrors && errors);
      console.log(errors);
    } else {
      setErrors({});
      setShowErrors(false);
      handleSignIn({email: email, password: password});
    }
  };

  const handleSignIn = ({email, password}) => {
    SignInWithEmailAndPassword({email, password})
      .then(() => {
        ToastAndroid.show('Logged In', ToastAndroid.SHORT);
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          return setErrors({email: 'User not found'});
        } else if (error.code === 'auth/wrong-password') {
          return setErrors({password: 'Wrong Password'});
        }
        setErrors({});
        setShowErrors(false);
        console.log(error);
      });
  };

  return (
    <View style={externalStyle.container}>
      <Header />
      <Image
        style={externalStyle.userLogoStyle}
        source={require('../../asset/icons/user.png')}
      />
      <Text style={externalStyle.textStyle}>Sign In</Text>
      <ScrollView>
        <KeyboardAvoidingView behavior="position" style={{flex: 1}}>
          <View>
            <TextInput
              style={externalStyle.textInput}
              placeholder="Email"
              placeholderTextColor={'#696969'}
              inputMode="email"
              value={email}
              onChangeText={e => setEmail(e)}
            />
            {errors.email && (
              <Text style={externalStyle.warningText}>{errors.email}</Text>
            )}
            <TextInput
              style={externalStyle.textInput}
              placeholder="Password"
              placeholderTextColor={'#696969'}
              secureTextEntry={true}
              autoCapitalize="none"
              value={password}
              onChangeText={e => setPassword(e)}
            />
            {errors.password && (
              <Text style={externalStyle.warningText}>{errors.password}</Text>
            )}
            <TouchableOpacity onPress={() => handleRegister()}>
              <View style={externalStyle.buttonStyle}>
                <Text Text style={{color: 'white'}}>
                  Login
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Text Text style={externalStyle.touchableText}>
                  Forget Password
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={externalStyle.nonTouchableText}>
                Not a member yet ?
                <Text style={externalStyle.touchableText}> Sign Up here</Text>
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                marginTop: 20,
                padding: 25,
                borderTopWidth: 1,
                borderTopColor: 'black',
              }}
            />
            <Text
              style={{color: 'black', marginHorizontal: 18, marginTop: -30}}>
              Or continue with
            </Text>
            <View
              style={{
                marginTop: 20,
                padding: 25,
                borderTopWidth: 1,
                borderTopColor: 'black',
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 30,
            }}>
            <TouchableOpacity onPress={() => signInWithGoogle()}>
              <Image
                style={{width: 80, height: 80}}
                source={require('../../asset/img/google.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => signInWithFacebook()}>
              <Image
                style={{width: 80, height: 80}}
                source={require('../../asset/img/facebook.png')}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default Home;
