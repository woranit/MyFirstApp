import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import {styles} from './styles';

const Signup = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {
    navigation.navigate('Signin');
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />

        <Input label="Name" placeholder="John Doe" />
        <Input label="Email" placeholder="example@gmail.com" />
        <Input isPassword label="Password" placeholder="**********" />

        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked} />
          <Text style={styles.agreeText}>
            I agree with <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
            <Text style={styles.agreeTextBold}>Privacy</Text>
          </Text>
        </View>

        <Button style={styles.button} title="Sign Up" />

        <Seperator text="Or sign in with" />

        <GoogleLogin />

        <Text style={styles.footerText}>
          Already have an account?
          <Text onPress={onSignIn} style={styles.footerLink}>
            {' '}
            Sign In
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default React.memo(Signup);
