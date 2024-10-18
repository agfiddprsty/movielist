import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { ENDPOINT } from '../../configs/index';
import BackButton from '../../components/elements/BackButton'
import { COLOR_BACKGROUND_PRIMARY_DARK, COLOR_BLACK } from '../../styles/index';
import styles from './styles';

const Component = (props) => {
  const { route, navigation } = props;
  const [detailMovie, setDetailMovie] = useState();
  const [reviewData, setReviewData] = useState();
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    getDetailMovies()
    getReview()
  }, []);

  const getDetailMovies = async () => {
    try {
      const result = await ENDPOINT.getDetailMovie({ id: route.params.id })
      setDetailMovie(result)
    } catch (error) {
      console.log(error)
    }
  }

  const getReview = async () => {
    try {
      const result = await ENDPOINT.getReviewMovie({ id: route.params.id })
      setReviewData(result.results)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <ParallaxScrollView
      backgroundColor={COLOR_BLACK}
      contentBackgroundColor={COLOR_BACKGROUND_PRIMARY_DARK}
      stickyHeaderHeight={60}
      parallaxHeaderHeight={350}
      renderStickyHeader={() => (
        <View key="sticky-header" style={styles.stickySection}>
          <View>
            <BackButton navigation={navigation} />
          </View>
          <Text style={styles.txtTitle}>{detailMovie?.title}</Text>
        </View>
      )}
      renderBackground={() => (
        <View key="background" style={styles.backgroundHeader}>
          <Image
            style={styles.imgBack}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${detailMovie?.backdrop_path
                }`,
            }}
          />
        </View>
      )}
      renderForeground={() => (
        <View key="parallax-header" style={styles.parallaxHeader}>
          <View style={styles.backBtn}>
            <BackButton navigation={navigation} />
          </View>

          <Image
            style={styles.avatar}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${detailMovie?.poster_path
                }`,
            }}
          />
          <View style={styles.conTxtHead}>
            <Text style={styles.txtInfo}>Title: {detailMovie?.title}</Text>
            <Text style={styles.txtInfo}>
              Release: {detailMovie?.release_date}
            </Text>
            <Text style={styles.txtInfo}>
              Runtime: {detailMovie?.runtime} Minutes
            </Text>
            <Text style={styles.txtInfo}>
              Rating: {detailMovie?.vote_average} / 10
            </Text>
            <Text style={styles.txtInfo}>
              Budget: {detailMovie?.budget} USD
            </Text>
          </View>
        </View>
      )}>
      <View style={styles.container}>
        <View style={styles.conRow}>
          <Text style={styles.txtTitle}>Overview: </Text>
          <Text style={styles.txtOverview}>{detailMovie?.overview}</Text>
        </View>
        <View style={styles.conRow}>
          <Text style={styles.txtTitle}>Homepage: </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(detailMovie?.homepage)}>
            <Text style={styles.txtOverview}>{detailMovie?.homepage}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.txtTitle}>Reviews: </Text>
          {reviewData?.length > 0 ? (
            <FlatList
              data={reviewData}
              style={styles.conYtb}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View>
                  {expand ? (
                    <TouchableOpacity
                      style={styles.conBtnReview}
                      onPress={() =>
                        setExpand(false)
                      }>
                      <View style={styles.headReview}>
                        <Text style={styles.txtOverview}>{item.author}</Text>
                      </View>
                      <View>
                        <Text style={styles.txtOverview}>{item.content}</Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.conBtnReviewHalf}
                      onPress={() =>
                        setExpand(true)
                      }>
                      <View style={styles.headReview}>
                        <Text style={styles.txtOverview}>{item.author}</Text>
                      </View>
                      <View>
                        <Text style={styles.txtOverview}>{item.content}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            />
          ) : (
            <Text style={styles.txtOverview}>No Reviews Available</Text>
          )}
        </View>
      </View>
    </ParallaxScrollView>
  )
}

export default Component;
