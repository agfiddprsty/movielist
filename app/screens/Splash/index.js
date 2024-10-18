import React from "react";
import { View, Image } from "react-native"
import { CommonActions } from '@react-navigation/native';
import ButtonPrimary from '../../components/elements/ButtonPrimary'
import { IMAGES } from "../../configs/index";
import styles from './styles';

const Splash = (props) => {
  const {navigation} = props;

  const onPressHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        source={IMAGES.icon}
      />
      <ButtonPrimary onPress={onPressHome} type="raised-ripple" title="Go to Home" />
    </View>
  )
}

export default Splash