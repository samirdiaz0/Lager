import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { Colors } from '../../constants/Colors';
import TouchableComponent from './TouchableComponent';

export const CustomButton = ({
    disabled,
    onPress,
    title,
    isLoading
}) => {

    const colorButton = (disabled || isLoading) ? '#EDEDED' : Colors.primary;

    const colorText = disabled ? Colors.dark : 'white';

    return (
        <TouchableComponent disabled={disabled || isLoading} onPress={onPress}>
            <View style={{
                ...styles.button,
                backgroundColor: colorButton
            }}>
                {isLoading ? (
                    <ActivityIndicator
                        style={{ width: '15%', height: '100%' }}
                        size={'large'}
                        color={Colors.primary}
                    />
                ) : (
                    <Text style={{
                        ...styles.buttonText,
                        color: colorText,
                    }}>
                        {title}
                    </Text>
                )}
            </View>
        </TouchableComponent>
    )
}

const styles = StyleSheet.create({
    button: {
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        padding: 0,
        borderRadius: 6
    },
    buttonText: {
        fontFamily: 'montserrat-semi-bold',
        textAlign: 'center',
        fontSize: 16,
    }
})