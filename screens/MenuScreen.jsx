import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import Header from '../components/Header';

export default function MenuScreen ({ navigation }) {
    const consultCase = () => {
        navigation.navigate('ConsultScreen')
    }
    const registerCase = () => {
        navigation.navigate('RegisterScreen')
    }

  return (
    <View style={{ flex: 1 }}>
        <Header />

        <View style={styles.screen}>
            <TouchableOpacity style={styles.container} onPress={consultCase}>
            <ImageBackground source={require('../assets/images/consult-case.jpg')} style={styles.image}>
                <Text style={styles.text} > Consultar caso </Text>
            </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={registerCase}>
            <ImageBackground source={require('../assets/images/register-case.jpg')} style={styles.image}>
                <Text style={styles.text} > Registrar caso </Text>
            </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
            <ImageBackground source={require('../assets/images/view-case.jpg')} style={styles.image}>
                <Text style={styles.text} > Vizualisar casos registrados </Text>
            </ImageBackground>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container:{
        width: 300,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        overflow: 'hidden',
        marginVertical: 16,
    },
    image:{
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 22,
        fontWeight: '500',
        color: '#F5F5F5',
        textAlign: 'center',
        paddingHorizontal: 16,
    }
})