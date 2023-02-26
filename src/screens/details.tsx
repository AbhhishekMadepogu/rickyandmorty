import {Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useCharecter} from '../hooks/useCharecter';

export default function Details(route: any) {
  const {data, loading, error} = useCharecter(route.route.params.id);
  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }
  if (error) {
    console.log(error);
  }

  return (
    <SafeAreaView>
      <Text>{data.character.name}</Text>
    </SafeAreaView>
  );
}
