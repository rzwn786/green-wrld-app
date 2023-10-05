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
import {CreateAccountWithEmailAndPassword} from '../../utils/utilities';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState({});

  const navigation = useNavigation();

  //Error Hanlding
  const getErrors = (email, password, confirmPassword) => {
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
    } else if (password.length < 8) {
      errors.password = 'Enter Password of 8 Characters';
    }

    //confirm password
    if (!confirmPassword) {
      errors.confirmPassword = 'Enter Confirm Password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Password not match';
    }

    return errors;
  };

  //Handle Registration
  const handleRegister = () => {
    const errors = getErrors(email, password, confirmPassword);

    if (Object.keys(errors).length > 0) {
      setShowErrors(true);
      setErrors(showErrors && errors);
      console.log(errors);
    } else {
      setErrors({});
      setShowErrors(false);
      handleSignIn(email, password);
    }
  };

  const handleSignIn = (email, password) => {
    CreateAccountWithEmailAndPassword({email, password})
      .then(() => {
        ToastAndroid.show('Account Created', ToastAndroid.SHORT);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          return setErrors({email: 'Email already in use'});
        } else if (error.code === 'auth/invalid-email') {
          return setErrors({email: 'Email is invalid '});
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
        source={require('../../asset/icons/signup.png')}
      />
      <Text style={externalStyle.textStyle}>Sign Up</Text>
      <ScrollView>
        <KeyboardAvoidingView>
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
          <TextInput
            style={externalStyle.textInput}
            placeholder="Confirm Password"
            placeholderTextColor={'#696969'}
            secureTextEntry={true}
            autoCapitalize="none"
            value={confirmPassword}
            onChangeText={e => setConfirmPassword(e)}
          />
          {errors.confirmPassword && (
            <Text style={externalStyle.warningText}>
              {errors.confirmPassword}
            </Text>
          )}
          <TouchableOpacity onPress={() => handleRegister()}>
            <View style={externalStyle.buttonStyle}>
              <Text Text style={{color: 'white'}}>
                Register
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={externalStyle.nonTouchableText}>
              Already a member ?
              <Text style={externalStyle.touchableText}> Sign In here</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text Text style={externalStyle.touchableText}>
                By Creating an account , you agree to our Terms of Service and
                Privacy Policy
              </Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Signup;
