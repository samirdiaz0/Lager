import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const TouchableComponent = ({ disabled, onPress, children }) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }
    return (
        <TouchableCmp disabled={disabled} useForeground onPress={onPress}>
            {children}
        </TouchableCmp>
    )
};

export default TouchableComponent;