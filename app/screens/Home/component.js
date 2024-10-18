import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Button from '../../components/elements/ButtonPrimary';
import TextField from '../../components/elements/TextField';
import styles from './styles';
import { ENDPOINT } from '../../configs';

// import measureNetworkBandwitdh from '../../utils/checkBandwidth';
// import errors from '../../utils/errors';
// import I18n from '../../i18n';

const Component = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState('');

    // useEffect(async () => {
    //   await actions.fetchGetListUser('1');
    //   measureNetworkBandwitdh((success, data, error) => {
    //     if (success) {
    //       Alert.alert(data);
    //     } else if (error) {
    //       Alert.alert(data);
    //     }
    //   })
    // }, []);

    // const loadData = async () => {
    //   try {
    //     await setIsLoading(true);
    //     const result = await ENDPOINT.getListUser('1');
    //     console.log(result)
    //   } catch (error) {
    //     errors.createError(I18n.t('error.timeOutConnection'));
    //   } finally {
    //     setIsLoading(false)
    //   }
    // };

    const onChangeText = text => {
      setValue(text)
    }

    return (
      <MainScreen isLoading={isLoading}>
        {/* <Header title="Home" setting back /> */}
        <View style={styles.container}>
          <Text style={styles.century}>Century Gothic</Text>
          <Text style={styles.janna}>Janna LT</Text>
          <Button title="Button CTA" type="raised-ripple" iconLeading iconTrailing disabled />
          <TextField
            placeholder="Enter Phone number"
            inputMode="numeric"
            prefix
            error="Phone number is required"
            onChangeText={onChangeText}
          />
        </View>
      </MainScreen>
    )
}

export default Component;
