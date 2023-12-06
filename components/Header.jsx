import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icons/logo-green.png')} style={styles.logo}/>
      <Image source={require('../assets/icons/hamburguer.png')} style={styles.hamburguer}/>
    </View>
  );
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#F5F5F5',
        width: '100%',
        top: 0,
        flexDirection: 'row',
        paddingTop: 48,
        paddingBottom: 18,
        paddingHorizontal: 36,
        borderBottomWidth: 1,
        borderBlockColor: '#DDDDDD',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 99,
    },
    logo: {
      height: 32,
      width: 32,
    },
    hamburguer: {
      height: 32,
      width: 32,
    },
})