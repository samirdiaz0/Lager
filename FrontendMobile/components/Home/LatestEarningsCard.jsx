import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import TouchableComponent from '../UI/TouchableComponent';

export const LatestEarnings = () => {
    return (
        <TouchableComponent onPress={() => { console.log('awd') }}>
            <View style={styles.earningsCard}>
                <View style={styles.earningsCol}>
                    <Text style={styles.earningAmount}>$23.890,93</Text>
                    <Text style={styles.earningText}>Ganancias de la semana</Text>
                </View>
                <View style={styles.arrowCol}>
                    <MaterialIcons name='keyboard-arrow-right' size={24} color={Colors.primary} />
                </View>
            </View>
        </TouchableComponent>
    )
}

const styles = StyleSheet.create({
    earningsCard: {
        backgroundColor: 'white',
        height: 80,
        marginVertical: 15,
        padding: 15,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    earningsCol: {
    },
    earningAmount: {
        fontSize: 27,
        fontFamily: 'montserrat-semi-bold',
        color: Colors.dark,
    },
    earningText: {
        fontSize: 14,
        fontFamily: 'montserrat-medium',
        color: Colors.dark
    },
    arrowCol: {
        justifyContent: 'center'
    },
})