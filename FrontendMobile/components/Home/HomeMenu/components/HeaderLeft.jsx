import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../../../constants/Colors';


export const HeaderLeft = (onPress) => {
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