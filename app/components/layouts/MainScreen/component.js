import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import StatusBar from '../../elements/StatusBar';
import Loading from '../../elements/Loading';

const Component = props => {
    const { children, isLoading, error, style } = props;

    return (
      <View style={[styles.container, style]}>
        <StatusBar />
        {isLoading && <Loading />}
        {!error && children}
      </View>
    );
};

export default Component;
