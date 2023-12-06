import { StyleSheet, Text, View, ImageBackground, Image, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HomeButton from '../components/Button'

const backgound = '../assets/images/home-image.jpg'
const logo = '../assets/icons/logo-white.png'

export default function HomeScreen ({ navigation }) {

    const nextScreen = () => {
        navigation.navigate('Menu')
    }

    return(
        <View style={styles.container}>
            <ImageBackground
            source={require(backgound)}
            style={styles.backgroundImage}
            >
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,1)']}
                    style={styles.backgroundGradient}
                >
                    <Image
                    source={require(logo)}
                    style={styles.logo}
                    />
                    <Text style={styles.textPrimary}>
                        Seja bem vindo ao <Text style={styles.textSecondary}> AgroTest </Text> seu App especialista!
                    </Text>
                    <HomeButton text={'Entrar'} onPress={nextScreen}/>
                </LinearGradient>
            </ImageBackground>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    backgroundGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 160,
    },
    textPrimary: {
      color: '#F5F5F5',
      fontSize: 22,
      textAlign: 'center',
      fontWeight: '500',
      marginTop: 220,
      marginHorizontal: 40,
      marginBottom: 36,
      maxWidth: 350,
    },
    textSecondary: {
        color: '#31CB00',
      },
  });
  