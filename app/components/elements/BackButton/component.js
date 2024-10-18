import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import Back from '../../../../assets/svgs/Back';

const Component = props => {
    const onPress = () => {
        props.navigation.goBack()
    };

    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Back />
      </TouchableOpacity>
    );
}

export default Component;
