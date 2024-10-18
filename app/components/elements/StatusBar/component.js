import React from 'react';
import { View, Platform, StatusBar } from 'react-native';

import styles from './styles';
import { COLOR_BASE_PRIMARY_MAIN } from '../../../styles';

const Component = () => {
    if (Platform.OS === 'ios') {
      return <View style={styles.statusBar} />;
    }
    return <StatusBar backgroundColor={COLOR_BASE_PRIMARY_MAIN} />;
}

export default Component;
