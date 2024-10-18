import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Text, View, Platform } from 'react-native';
import styles from './styles';
import { noop } from '../../../utils';
import PlaceholderIcon from '../../../../assets/svgs/PlaceholderIcon';

const Component = props => {
  const { onPress = noop, disabled, isUpperCase, type, customContainer, customText, iconLeading, iconTrailing, leftContainerStyle, rightContainerStyle, centerContainerStyle, fullWidth } = props;
  let { title } = props;

  let containerStyle = fullWidth ? styles.containerFullWidth : styles.container;
  let textStyle = styles.text;
  let ComponentView = TouchableOpacity;
  if (type.match(/flat-ripple|raised-ripple/) && Platform.OS === 'android') {
    ComponentView = TouchableNativeFeedback;
  }
  if (type.match(/flat|flat-ripple/)) {
    containerStyle = styles.containerFlat;
  }
  if (disabled) {
    containerStyle = styles.containerDisabled;
    textStyle = styles.textDisabled;
  }
  if (isUpperCase) {
    title = title.toUpperCase();
  }

  const renderLeading = () => {
    let LeftComponent = <View />;
    if (iconLeading) {
      if (iconLeading === true) {
        LeftComponent = <PlaceholderIcon />;
      } else {
        LeftComponent = iconLeading
      }
    } 
    return <View style={[styles.leftRightContainer, leftContainerStyle]}>{LeftComponent}</View>;
  };

  const renderCenter = () => {
    return (
      <View style={[styles.centerContainer, centerContainerStyle]}>
        {renderTitle()}
      </View>
    );
  };

      
  const renderTitle = () => <Text style={[textStyle, customText]}>{title}</Text>;

  const renderTrailing = () => {
    let RightComponent = <View />;
    if (iconTrailing) {
      if (iconTrailing === true) {
        RightComponent = <PlaceholderIcon />;
      } else {
        RightComponent = iconTrailing
      }
    }
    return <View style={[styles.leftRightContainer, rightContainerStyle]}>{RightComponent}</View>;
  };

  return (
    <ComponentView disabled={disabled} style={[containerStyle, customContainer]} onPress={onPress}>
      <View style={[containerStyle, customContainer]}>
        {renderLeading()}
        {renderCenter()}
        {renderTrailing()}
      </View>
    </ComponentView>
  );
};

export default Component;
