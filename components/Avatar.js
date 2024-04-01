import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function Avatar() {
    return (
        <View style={ styles.container }>
          <Image
            source={ require('../assets/favicon.png') }
            style={ styles.avatar }
            resizeMode='contain'
          />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 50,
        backgroundColor: 'white',
        // marginBottom: 10,
    },
});
