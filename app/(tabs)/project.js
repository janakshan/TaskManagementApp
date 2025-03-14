// app/(tabs)/projects.js
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function ProjectsScreen() {
    const projects = [
        { id: 1, name: 'Project 1', tasks: 8, completed: 2, progress: 40 },
        { id: 2, name: 'Project 2', tasks: 8, completed: 6, progress: 75 },
        { id: 3, name: 'Project 3', tasks: 10, completed: 1, progress: 10 },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Projects</Text>
            </View>

            <FlatList
                data={projects}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.projectItem}>
                        <View style={[styles.projectColor, { backgroundColor: getColorForProject(item.id) }]} />
                        <View style={styles.projectContent}>
                            <Text style={styles.projectTitle}>{item.name}</Text>
                            <Text style={styles.projectSubtitle}>{item.tasks} tasks • {item.completed} completed</Text>
                            <View style={styles.progressBarBackground}>
                                <View
                                    style={[
                                        styles.progressBar,
                                        { width: `${item.progress}%`, backgroundColor: getColorForProject(item.id) }
                                    ]}
                                />
                            </View>
                            <Text style={styles.progressText}>{item.progress}%</Text>
                        </View>
                        <TouchableOpacity style={styles.projectMoreButton}>
                            <Text>•••</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

function getColorForProject(id) {
    const colors = ['#FF6B6B', '#4ECB71', '#4A89DC'];
    return colors[(id - 1) % colors.length];
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
        paddingBottom: 16,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    projectItem: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    projectColor: {
        width: 4,
        borderRadius: 2,
        marginRight: 10,
    },
    projectContent: {
        flex: 1,
    },
    projectTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    projectSubtitle: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    progressBarBackground: {
        height: 6,
        backgroundColor: '#f0f0f0',
        borderRadius: 3,
        marginTop: 10,
    },
    progressBar: {
        height: 6,
        borderRadius: 3,
    },
    progressText: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
        textAlign: 'right',
    },
    projectMoreButton: {
        padding: 5,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#8000ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
});