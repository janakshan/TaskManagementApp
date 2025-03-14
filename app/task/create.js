// app/task/create.js
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function CreateTaskScreen() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('Mar 16, 2025');
    const [priority, setPriority] = useState('Medium');

    const handleSave = () => {
        // In a real app, you would save the task to your backend
        // For now, we'll just go back to the home screen
        router.replace('/(tabs)/home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.headerButton}
                    onPress={() => router.back()}
                >
                    <Text style={styles.headerButtonText}>Cancel</Text>
                </TouchableOpacity>

                <Text style={styles.headerTitle}>New Task</Text>

                <TouchableOpacity
                    style={styles.headerButton}
                    onPress={handleSave}
                >
                    <Text style={styles.headerButtonText}>Save</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Task title"
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={description}
                        onChangeText={setDescription}
                        placeholder="Include avatar, user details, and..."
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Due Date</Text>
                    <TouchableOpacity style={styles.datePickerButton}>
                        <Text>{dueDate}</Text>
                        <Text style={styles.dropdownIcon}>▼</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Priority</Text>
                    <View style={styles.prioritySelector}>
                        <TouchableOpacity
                            style={[
                                styles.priorityOption,
                                priority === 'High' && styles.priorityOptionSelected,
                                styles.priorityHigh
                            ]}
                            onPress={() => setPriority('High')}
                        >
                            <Text style={[
                                styles.priorityText,
                                priority === 'High' && styles.priorityTextSelected
                            ]}>High</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.priorityOption,
                                priority === 'Medium' && styles.priorityOptionSelected,
                                styles.priorityMedium
                            ]}
                            onPress={() => setPriority('Medium')}
                        >
                            <Text style={[
                                styles.priorityText,
                                priority === 'Medium' && styles.priorityTextSelected
                            ]}>Medium</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.priorityOption,
                                priority === 'Low' && styles.priorityOptionSelected,
                                styles.priorityLow
                            ]}
                            onPress={() => setPriority('Low')}
                        >
                            <Text style={[
                                styles.priorityText,
                                priority === 'Low' && styles.priorityTextSelected
                            ]}>Low</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Project</Text>
                    <TouchableOpacity style={styles.projectSelector}>
                        <Text>Project 3</Text>
                        <Text style={styles.dropdownIcon}>▼</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 16,
    },
    headerButton: {
        padding: 8,
    },
    headerButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    section: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 10,
        fontSize: 16,
    },
    textArea: {
        minHeight: 100,
    },
    datePickerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 10,
    },
    dropdownIcon: {
        fontSize: 12,
        color: '#666',
    },
    prioritySelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    priorityOption: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginHorizontal: 4,
    },
    priorityOptionSelected: {
        borderColor: 'transparent',
    },
    priorityHigh: {
        backgroundColor: '#FFE0E0',
    },
    priorityMedium: {
        backgroundColor: '#FFF0E0',
    },
    priorityLow: {
        backgroundColor: '#E0FFE0',
    },
    priorityText: {
        color: '#666',
    },
    priorityTextSelected: {
        color: '#000',
        fontWeight: 'bold',
    },
    projectSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 10,
    },
});