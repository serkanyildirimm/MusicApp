import React from 'react';
import styles from './SearchBar.styles';
import {TextInput, View} from 'react-native';
const SearchBar = ({onSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="find song" onChangeText={onSearch} />
    </View>
  );
};
export default SearchBar;
