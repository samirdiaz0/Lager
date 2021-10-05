import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { OptionButton } from './components/OptionButton';
import { Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export const HomeKeyPad = () => {
    return (
        <View style={styles.keyPad}>
            <OptionButton
                title='Cargar productos'
                icon={<MaterialCommunityIcons name='barcode-scan' size={24} color={Colors.dark} />}
            />
            <OptionButton
                title='Nueva venta'
                icon={<MaterialCommunityIcons name='cart-plus' size={24} color={Colors.dark} />}
            />
            <OptionButton
                title='Ver estadísticas'
                icon={<MaterialCommunityIcons name='chart-bar' size={24} color={Colors.dark} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    keyPad: {
        backgroundColor: 'white',
        marginTop: 25,
        marginBottom: 15,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'column',
        overflow: 'hidden'
    }
})