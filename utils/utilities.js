import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import React from 'react';
import {Alert} from 'react-native';

GoogleSignin.configure({
  webClientId:
    '588104088602-vbmqctf425i78kh800bjb7qrsjdiuub3.apps.googleusercontent.com',
  offlineAccess: true,
});

export const CreateAccountWithEmailAndPassword = ({email, password}) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const SignInWithEmailAndPassword = ({email, password}) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const signOutUser = () => {
  return auth().signOut();
};

export const signInWithGoogle = async () => {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};

export const signInWithFacebook = async () => {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  if (result.isCancelled) {
    Alert.alert('Cancelled Login Process');
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccessToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
};
