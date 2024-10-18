import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ENDPOINT } from '../../configs';

const Component = props => {
  const { navigation } = props;
  const [data, setData] = useState();

  useEffect(() => {
    getMovieData()
  }, [])

  const getMovieData = async () => {
    try {
      const result = await ENDPOINT.getMovieList();
      setData(result.results)
    } catch (error) {
      console.log(error)
    }
  }

  const onPressDetail = (id) => {
    navigation.navigate('DetailMovie', { id: id })
  }

  const CardItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onPressDetail(item.id)} style={styles.containerCard}>
        <Image
          style={styles.poster}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path
              }`,
          }}
        />
        <Text numberOfLines={1} style={styles.movieTitle}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.containerList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CardItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Component;
