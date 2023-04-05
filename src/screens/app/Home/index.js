import React from 'react';
import {FlatList, ScrollView, Text} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header showSearch title="Find All You Need"/>
        <Text>HOME</Text>
        <FlatList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
