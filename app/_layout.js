// app/_layout.js
import { Stack, Slot } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        await AsyncStorage.getItem('userToken');
        // We don't need to do anything with the result here
        // The index.js will handle the redirection
      } catch (error) {
        console.error('Error checking auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

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

  // Use Slot instead of Stack for the root layout
  // This allows child routes to handle their own navigation
  return <Slot />;
}