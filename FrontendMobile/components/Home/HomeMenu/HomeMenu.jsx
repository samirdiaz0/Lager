import React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

export const HomeMenu = ({ open, onClose }) => {
    return (
        <Modal
            animationIn='slideInLeft'
            animationOut='slideOutLeft'
            animationInTiming={600}
            animationOutTiming={600}
            useNativeDriver={true}
            isVisible={open}
            style={styles.modalStyle}
            onBackButtonPress={onClose}
            onBackdropPress={onClose}
        >
            <View style={styles.modalView}>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalStyle: {
        margin: 0, padding: 0
    },
    modalView: {
        width: '80%',
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 19,
    },
});