import React from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../constants/Colors';

export const LoginScreen = () => {

    return (
        <KeyboardAvoidingView style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.imageRow}>
                    <Image
                        source={require('../assets/LagerLogo.jpg')}
                        style={styles.image}
                        resizeMode='contain'
                    />
                </View>
                <TextInput
                    placeholder='Usuario o télefono'
                />
                <TextInput
                    placeholder='Contraseña'
                />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.white
    },
    container: {
        width: '80%',
        alignSelf: 'center',
        height: '100%',
    },
    imageRow: {
        alignItems: 'center'
    },
    image: {
        width: 500,
        height: 120
    }
})