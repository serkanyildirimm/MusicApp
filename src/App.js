import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import SongCard from './components/SongCard/';
import SearchBar from './components/SearchBar';
import music_data from './music-data.json';

const App = () => {
  const [list, setList] = useState(music_data);
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      const currentArtist = song.artist.toLowerCase();
      if (currentTitle.includes(searchedText)) {
        return currentTitle;
      }
      if (currentArtist.includes(searchedText)) {
        return currentArtist;
      }
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>MUSIC APP</Text>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 5,
    color: 'black',
  },
  seperator: {
    borderWidth: 0.2,
    borderColor: 'grey',
  },
});

export default App;
