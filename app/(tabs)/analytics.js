// app/(tabs)/analytics.js
import { View, Text, StyleSheet } from 'react-native';

export default function AnalyticsScreen() {
    // Analytics implementation would go here

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Analytics</Text>
            </View>
            <Text style={styles.placeholder}>Analytics View Goes Here</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#8000ff',
        padding: 16,
        paddingTop: 40,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    placeholder: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 16,
        color: '#666',
    },
});