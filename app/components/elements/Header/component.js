import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import BackButton from '../BackButton';
import Setting from '../../../../assets/svgs/Setting';

const Component = props => {
  const { title, setting, back, leftComponent, centerComponent, rightComponent, centerContainerStyle, leftContainerStyle, rightContainerStyle } = props;

  const renderLeft = () => {
    let LeftComponent = <View />;
    if (back) {
      LeftComponent = <BackButton />;
    } else if (leftComponent) {
      LeftComponent = leftComponent;
    }
    return <View style={[styles.leftRightContainer, leftContainerStyle]}>{LeftComponent}</View>;
  };
    
  const renderCenter = () => {
    return (
      <View style={[styles.centerContainer, centerContainerStyle]}>
        {title ? renderTitle(title) : centerComponent}
      </View>
    );
  };

  const renderTitle = title => <Text style={styles.title}>{title}</Text>;

  const renderRight = () => {
    let RightComponent = <View />;
    if (setting) {
      RightComponent = <Setting />;
    } else if (rightComponent) {
      RightComponent = rightComponent;
    }
    return <View style={[styles.leftRightContainer, rightContainerStyle]}>{RightComponent}</View>;
  };


  return (
    <View style={styles.container}>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </View>
  )
}

export default Component;
