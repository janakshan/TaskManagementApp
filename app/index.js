// app/index.js
import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function checkAuth() {
            try {
                const token = await AsyncStorage.getItem('userToken');
                setIsAuthenticated(token !== null);
            } catch (error) {
                console.error('Error checking authentication:', error);
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        }

        checkAuth();
    }, []);

    // Show loading indicator while checking authentication
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#8000ff" />
            </View>
        );
    }

    // Only redirect when we know the authentication status
    if (isAuthenticated) {
        return <Redirect href="/(tabs)/home" />;
    } else {
        return <Redirect href="/(auth)/login" />;
    }
}