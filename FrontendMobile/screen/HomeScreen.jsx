import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { Feather } from '@expo/vector-icons';
import { HomeMenu } from '../components/Home/HomeMenu/HomeMenu';

const HeaderLeft = (onPress) => {
    return (
        <Feather
            name='menu'
            style={{ marginLeft: 15 }}
            size={25}
            color={Colors.white}
            onPress={onPress}
        />
    )
}

export const HomeScreen = ({ navigation }) => {

    const [openMenu, setOpenMenu] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => HeaderLeft(() => setOpenMenu(true)),
            headerTitle: 'Hola Miguel'
        })
    }, []);

    return (
        <View style={styles.screen}>
            <HomeMenu
                open={openMenu}
                onClose={() => setOpenMenu(false)}
            />
            <Text>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.white
    }
})