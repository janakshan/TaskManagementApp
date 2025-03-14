// app/task/[id].js
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TaskDetailScreen() {
    const { id } = useLocalSearchParams();

    // In a real app, you would fetch task details based on the ID
    const task = {
        id: parseInt(id),
        title: 'Complete wireframes',
        dueDate: 'Mar 15, 2025',
        priority: 'HIGH',
        project: 'Project 3',
        description: 'Create wireframes for all main screens of the Task Management App',
        subtasks: [
            { id: 1, title: 'Login screen', completed: true },
            { id: 2, title: 'Home screen', completed: false },
            { id: 3, title: 'Task detail', completed: false }
        ]
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <FontAwesome5 name="arrow-left" size={18} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Task Detail</Text>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.label}>Title</Text>
                    <Text style={styles.title}>{task.title}</Text>
                </View>

                <View style={styles.rowSection}>
                    <View style={styles.halfSection}>
                        <Text style={styles.label}>Due Date</Text>
                        <Text style={styles.value}>{task.dueDate}</Text>
                    </View>
                    <View style={styles.halfSection}>
                        <Text style={styles.label}>Priority</Text>
                        <View style={styles.priorityBadge}>
                            <Text style={styles.priorityText}>{task.priority}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Project</Text>
                    <View style={styles.projectBadge}>
                        <Text style={styles.projectText}>{task.project}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Description</Text>
                    <Text style={styles.description}>{task.description}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Subtasks ({task.subtasks.filter(s => s.completed).length}/{task.subtasks.length})</Text>

                    {task.subtasks.map((subtask) => (
                        <View key={subtask.id} style={styles.subtaskItem}>
                            <View style={[
                                styles.subtaskCheckbox,
                                subtask.completed ? styles.subtaskCheckboxCompleted : {}
                            ]}>
                                {subtask.completed && <FontAwesome5 name="check" size={12} color="#fff" />}
                            </View>
                            <Text style={[
                                styles.subtaskTitle,
                                subtask.completed ? styles.subtaskTitleCompleted : {}
                            ]}>
                                {subtask.title}
                            </Text>
                        </View>
                    ))}
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
        padding: 16,
        paddingTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        marginRight: 30, // to offset the backButton width and center the title
    },
    content: {
        flex: 1,
        padding: 16,
    },
    section: {
        marginBottom: 20,
    },
    rowSection: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    halfSection: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 16,
    },
    priorityBadge: {
        backgroundColor: '#FFE0E0',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 16,
        alignSelf: 'flex-start',
    },
    priorityText: {
        color: '#FF6B6B',
        fontWeight: 'bold',
        fontSize: 12,
    },
    projectBadge: {
        backgroundColor: '#E0E0FF',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 16,
        alignSelf: 'flex-start',
    },
    projectText: {
        color: '#8000ff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
    },
    subtaskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    subtaskCheckbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#8000ff',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtaskCheckboxCompleted: {
        backgroundColor: '#8000ff',
    },
    subtaskTitle: {
        fontSize: 16,
    },
    subtaskTitleCompleted: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
});