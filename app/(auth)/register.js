// app/(auth)/register.js
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen() {
    const handleRegister = async () => {
        // In a real app, you would register with your API
        await AsyncStorage.setItem('userToken', 'dummy-token');
        router.replace('/(tabs)');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}>LOGO</Text>
                </View>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Name"
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.registerButton}
                onPress={handleRegister}
            >
                <Text style={styles.registerButtonText}>REGISTER</Text>
            </TouchableOpacity>

            <View style={styles.loginContainer}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => router.push('/auth/login')}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#8000ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    registerButton: {
        backgroundColor: '#8000ff',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginText: {
        color: '#8000ff',
        fontWeight: 'bold',
    },
});