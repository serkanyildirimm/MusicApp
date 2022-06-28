import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    color: 'black',
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    justifyContent: 'center',
    padding: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
    color: 'black',
  },
  info_container: {
    flexDirection: 'row',
    flex: 3,
    alignItems: 'center',
  },
  artist: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  year: {
    marginLeft: 10,
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 12,
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  soldout_title: {
    color: 'red',
  },
  content_container: {
    flexDirection: 'row',
  },
});

export default styles;
