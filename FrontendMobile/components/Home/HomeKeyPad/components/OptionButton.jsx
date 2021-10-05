import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { Colors } from '../../../../constants/Colors';
import TouchableComponent from '../../../UI/TouchableComponent';

export const OptionButton = ({ title, icon }) => {
    return (
        <TouchableComponent onPress={() => console.log('asdqwe')}>
            <View style={styles.optionButton}>
                <View style={styles.titleCol}>
                    {icon}
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MaterialIcons name='keyboard-arrow-right' size={24} color={Colors.primary} />
            </View>
        </TouchableComponent>
    )
}
const styles = StyleSheet.create({
    optionButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden',
        padding: 18,
        borderTopColor: '#EDEDED',
        borderTopWidth: 1
    },
    titleCol: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'montserrat-semi-bold',
        fontSize: 16,
        color: Colors.dark,
        marginLeft: 20
    },
    arrowCol: {
    }
})