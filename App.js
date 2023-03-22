import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Signin from './src/screens/auth/Signin';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import Config from 'react-native-config';

const WEB_CLIENT_ID =
  '900033538578-kh0gn0eo2h2lknoq0p6kk6erfh8epv07.apps.googleusercontent.com';

const App = () => {
  useEffect(() => {}, []);
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });
  return (
    <SafeAreaView>
      <Signin />
    </SafeAreaView>
  );
};

export default App;
