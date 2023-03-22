import React from 'react';
import {Text} from 'react-native';
import {ScrollView} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import {styles} from './styles';

const Signin = () => {
  const onSignUp = () => {
    console.log('Sign In');
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign In" />

      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="**********" />

      <Button style={styles.button} title="Sign In" />

      <Seperator text="Or sign in with" />

      <GoogleLogin />

      <Text style={styles.footerText}>
        Don't have an account?
        <Text onPress={onSignUp} style={styles.footerLink}>
          {' '}
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};
export default React.memo(Signin);
