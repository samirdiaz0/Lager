import React from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { CustomButton } from '../components/UI/CustomButton';
import TouchableComponent from '../components/UI/TouchableComponent';
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
                <View style={styles.form}>
                    <View style={styles.formSection}>
                        <View style={styles.inputRow}>
                            <TextInput
                                placeholder='Usuario o télefono'
                                style={styles.input}
                                autoCapitalize='none'
                            />
                        </View>
                        <View style={styles.inputRow}>
                            <TextInput
                                placeholder='Contraseña'
                                style={styles.input}
                                autoCapitalize='none'
                            />
                        </View>
                    </View>
                    <View style={styles.forgotButton}>
                        <TouchableComponent onPress={() => console.log('si me re olvidé man')}>
                            <View>
                                <Text style={styles.forgotButtonText}>¿Olvidaste tu contraseña?</Text>
                            </View>
                        </TouchableComponent>
                    </View>
                </View>
                <View style={styles.loginButtonRow}>
                    <CustomButton
                        disabled={false}
                        onPress={() => console.log('awd')}
                        title='Iniciar sesión'
                        isLoading={false}
                    />
                    <View style={styles.registerRow}>
                        <TouchableComponent onPress={() => console.log('no tengo brou')}>
                            <View style={styles.registerButton}>
                                <Text style={styles.registerButtonText}>¿No tenés una cuenta?
                                    <Text style={{ ...styles.registerButtonText, fontFamily: 'montserrat-semi-bold', color: Colors.primary }}> Registrate.</Text>
                                </Text>
                            </View>
                        </TouchableComponent>
                    </View>
                </View>
            </View >
        </KeyboardAvoidingView >
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
        flex: 1,
    },
    imageRow: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 150
    },
    form: {
        flex: 3,
    },
    formSection: {
        flex: 1,
    },
    inputRow: {
        flex: 1,
    },
    input: {
        fontSize: 18,
        fontFamily: 'montserrat-medium',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        paddingVertical: 5
    },
    forgotButton: {
        flex: 1,
    },
    forgotButtonText: {
        fontSize: 16,
        fontFamily: 'montserrat-medium',
        color: Colors.secondary
    },
    loginButtonRow: {
        flex: 1,
        justifyContent: 'center'
    },
    registerRow: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    registerButton: {
        flexDirection: 'row'
    },
    registerButtonText: {
        fontFamily: 'montserrat-medium',
        color: Colors.dark,
        fontSize: 16,
    }
})