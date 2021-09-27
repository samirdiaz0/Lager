import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { CustomButton } from '../components/UI/CustomButton';
import TouchableComponent from '../components/UI/TouchableComponent';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export const LoginScreen = ({ navigation }) => {

    const [userData, setUserData] = useState({ password: '', username: '' });
    const [hidePassword, setHidePassword] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleUserChange = (name, value) => {
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const login = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2300);
    }

    const navigateTo = (nameScreen) => navigation.navigate(nameScreen);

    return (
        <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : null}>
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
                                value={userData.username}
                                onChangeText={(value) => handleUserChange('username', value)}
                            />
                        </View>
                        <View style={styles.inputRow}>
                            <TextInput
                                placeholder='Contraseña'
                                style={styles.input}
                                autoCapitalize='none'
                                value={userData.password}
                                secureTextEntry={hidePassword}
                                onChangeText={(value) => handleUserChange('password', value)}
                            />
                            <Ionicons
                                name={hidePassword ? 'eye-off' : 'eye'}
                                size={22}
                                color={hidePassword ? Colors.dark : Colors.secondary}
                                style={styles.eyeIcon}
                                onPress={() => setHidePassword(!hidePassword)}
                            />
                        </View>
                    </View>
                    <View style={styles.forgotButton}>
                        <TouchableComponent onPress={() => navigateTo('ForgotPassword')}>
                            <View>
                                <Text style={styles.forgotButtonText}>¿Olvidaste tu contraseña?</Text>
                            </View>
                        </TouchableComponent>
                    </View>
                </View>
                <View style={styles.loginButtonRow}>
                    <CustomButton
                        disabled={false}
                        onPress={login}
                        title='Iniciar sesión'
                        isLoading={isLoading}
                    />
                    <View style={styles.registerRow}>
                        <TouchableComponent onPress={() => navigateTo('Register')}>
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
        width: '100%',
    },
    formSection: {
        flex: 1,
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        width: '100%',
        fontFamily: 'montserrat-medium',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        paddingVertical: 5,
    },
    eyeIcon: {
        padding: 10,
        marginLeft: 'auto',
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
        fontSize: 14,
    }
})