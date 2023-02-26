import {
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useCharecters} from '../hooks/useCharecters';
import Searchbar from '../components/Searchbar';

export default function Home({navigation}) {
  const {error, loading, data} = useCharecters();

  console.log(error, loading, data);
  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }
  if (error) {
    console.log(error);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Searchbar />
      <FlatList
        data={data.characters.results}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {id: item.id});
            }}
            style={styles.card}>
            <Image source={{uri: item.image}} style={styles.img} />
            <Text style={styles.text}>{item.name}</Text>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#5e5e5e',
    marginBottom: 5,
    marginHorizontal: 10,
  },
  img: {height: 70, width: 70},
  text: {alignSelf: 'center'},
});
