import React, { useLayoutEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors, HomeGradient } from '../constants/Colors';
import { HomeMenu } from '../components/Home/HomeMenu/HomeMenu';
import { LinearGradient } from 'expo-linear-gradient';
import { HeaderLeft } from '../components/Home/HomeMenu/components/HeaderLeft';
import { LatestEarnings } from '../components/Home/LatestEarningsCard';
import { HomeKeyPad } from '../components/Home/HomeKeyPad/HomeKeyPad';

export const HomeScreen = ({ navigation }) => {

    const [openMenu, setOpenMenu] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => HeaderLeft(() => setOpenMenu(true)),
            headerTitle: 'Hola Miguel'
        })
    }, []);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: Colors.primary }}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <LinearGradient
                style={styles.screen}
                colors={HomeGradient}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.1, y: 0.5 }}
            >
                <View style={styles.container}>
                    <HomeMenu
                        open={openMenu}
                        onClose={() => setOpenMenu(false)}
                    />
                    <LatestEarnings />
                    <HomeKeyPad />
                    <View style={styles.cardExample3}>
                        <Text>card Example 3</Text>
                    </View>
                    <View style={styles.cardExample3}>
                        <Text>card Example 4</Text>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    container: {
        width: '95%',
        flex: 1
    },
    cardExample3: {
        backgroundColor: 'white',
        height: 250,
        marginVertical: 25,
        padding: 15,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})