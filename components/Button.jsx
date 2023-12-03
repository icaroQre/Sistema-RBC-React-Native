import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeButton ({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>
                { text }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5', 
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 16,
    },
    text: {
        fontSize: 18,
        color: '#152614',
        fontWeight: '500',
    }
});