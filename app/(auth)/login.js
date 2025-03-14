// app/(auth)/login.js
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
    const handleLogin = async () => {
        // In a real app, you would validate credentials with your API
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
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
            >
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>- OR -</Text>

            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialButtonText}>Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialButtonText}>Facebook</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.registerContainer}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => router.push('/auth/register')}>
                    <Text style={styles.registerText}>REGISTER</Text>
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
    loginButton: {
        backgroundColor: '#8000ff',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        marginVertical: 15,
        color: '#666',
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    socialButton: {
        flex: 0.48,
        backgroundColor: '#4285F4',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialButtonText: {
        color: '#fff',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    registerText: {
        color: '#8000ff',
        fontWeight: 'bold',
    },
});
