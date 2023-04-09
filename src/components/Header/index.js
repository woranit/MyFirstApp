import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import Input from '../Input';

const Header = ({title, onBackPress, onLogout, showLogout, showSearch, onSearch, keyword, showBack}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearchClick = () => {
    setShowSearchInput(s => !s)
  }
  
  return (
    <View>
      <View style={styles.container}>
        {showBack ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image source={require('../../assets/back.png')} />
          </Pressable>
          ) : showSearch ? (
            <Pressable hitSlop={20} onPress={onSearchClick}>
            <Image source={require('../../assets/search.png')} />
            </Pressable>
          ): <View style={styles.space} />}

          <Text style={styles.title}>{title}</Text>

          {showLogout ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image source={require('../../assets/Logout.png')} />
          </Pressable>
          ) : <View style={styles.space} /> }
    </View>

        {showSearchInput ? (
          <Input onChangeText={onSearch} value={keyword} placeholder="Type your keyword..." />
        ) : null}

    </View>
    
  );
};

export default React.memo(Header);
