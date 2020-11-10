import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const AppButton = ({
  onPress,
  title,
  appButtonContainer,
  appButtonText,
  ...rest
}) => (
  <TouchableOpacity
    {...rest}
    onPress={onPress}
    style={appButtonContainer || {}}>
    <Text style={appButtonText || {}}>{title}</Text>
  </TouchableOpacity>
);

export {AppButton};
