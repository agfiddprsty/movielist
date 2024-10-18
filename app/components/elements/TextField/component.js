import React, { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import { COLOR_FONT_QUATERNARY_LIGHT } from '../../../styles/index';
import styles from './styles';

const Component = props => {
  const {label, placeholder, prefix, inputMode, error, onChangeText} = props;
  const [value, setValue] = useState('')

  const _onChangeText = text => {
    setValue(text)
    onChangeText(text);
  };

  return (
    <View style={styles.containerTextField}>
      {label && (
        <Text>{label}</Text>
      )}
      <View style={styles.containerField}>
        {prefix && (
          <Text style={styles.prefix}>🇦🇪 +971</Text>
        )}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLOR_FONT_QUATERNARY_LIGHT}
          autoCorrect={false}
          inputMode={inputMode}
          onChangeText={_onChangeText}
          style={styles.textField}
          value={value}
        />
      </View>
      {error && (
        <View style={styles.containerField}>
          {prefix && (
            <Text style={styles.emptyPrefix}></Text>
          )}
          <Text style={styles.errorText}>{error}</Text>
        </View>        
      )}
    </View>
  );
}

export default Component;
