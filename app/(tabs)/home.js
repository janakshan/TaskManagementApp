// app/(tabs)/home.js
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Stack, router } from 'expo-router';

export default function HomeScreen() {
  const tasks = [
    { id: 1, title: 'Complete wireframes', priority: 'High', project: 'Project 3' },
    { id: 2, title: 'Setup project structure', priority: 'Medium', project: 'Project 3' },
    { id: 3, title: 'Create components', priority: 'Low', project: 'Project 3' },
  ];

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <Text style={styles.username}>John Doe</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search tasks..."
        />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabText}>TODAY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>UPCOMING</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>COMPLETED</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => router.push({
              pathname: '/task/[id]',
              params: { id: item.id }
            })}
          >
            <View style={styles.taskCheckbox} />
            <View style={styles.taskContent}>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text style={styles.taskSubtitle}>{item.project} • {item.priority} Priority</Text>
            </View>
            <TouchableOpacity style={styles.taskMoreButton}>
              <Text>•••</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/task/create')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
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
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontWeight: 'bold',
  },
  username: {
    color: '#fff',
    marginLeft: 10,
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#8000ff',
  },
  tabText: {
    fontSize: 12,
  },
  taskItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  taskCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#8000ff',
  },
  taskContent: {
    flex: 1,
    marginLeft: 10,
  },
  taskTitle: {
    fontSize: 16,
  },
  taskSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  taskMoreButton: {
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