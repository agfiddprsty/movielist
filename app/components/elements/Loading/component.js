import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { COLOR_WHITE } from '../../../styles';
import I18n from '../../../i18n';

const Loading = props => {
    const { customStyles } = props;
    const containerStyles = [customStyles, styles.container];

    return (
      <View style={containerStyles}>
        <View style={styles.containerView}>
          <ActivityIndicator color={COLOR_WHITE} size="large" />
          <Text style={styles.text}>{I18n.t('loading')}</Text>
        </View>
      </View>
    )
}

export default Loading;
