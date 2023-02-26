import {StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {gql, useLazyQuery} from '@apollo/client';

export default function Searchbar() {
  const [name, setName] = useState('');
  return (
    <>
      <TextInput
        placeholder="search"
        autoFocus={false}
        style={styles.search}
        value={name}
        onChangeText={(text: String) => {
          setName(String(text));
        }}
      />
    </>
  );
}
const styles = StyleSheet.create({
  search: {
    fontSize: 18,
    marginHorizontal: 10,
    borderColor: '#000',
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginBottom: 5,
  },
});
