// app/(tabs)/home.js
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Stack, router } from 'expo-router';
import NavBar from '../../components/ui/NavBar';
import Avatar from '../../components/ui/Avatar';

export default function HomeScreen() {
  const tasks = [
    { id: 1, title: 'Complete wireframes', priority: 'High', project: 'Project 3' },
    { id: 2, title: 'Setup project structure', priority: 'Medium', project: 'Project 3' },
    { id: 3, title: 'Create components', priority: 'Low', project: 'Project 3' },
    { id: 4, title: 'Implement authentication', priority: 'High', project: 'Project 1' },
    { id: 5, title: 'Design database schema', priority: 'High', project: 'Project 2' },
    { id: 6, title: 'Optimize API performance', priority: 'Medium', project: 'Project 1' },
    { id: 7, title: 'Fix UI bugs', priority: 'Low', project: 'Project 3' },
    { id: 8, title: 'Write unit tests', priority: 'Medium', project: 'Project 2' },
    { id: 9, title: 'Deploy to staging', priority: 'High', project: 'Project 1' },
    { id: 10, title: 'Refactor codebase', priority: 'Low', project: 'Project 2' },
    { id: 11, title: 'Prepare project documentation', priority: 'Medium', project: 'Project 3' },
    { id: 12, title: 'Setup CI/CD pipeline', priority: 'High', project: 'Project 2' },
    { id: 13, title: 'Improve accessibility', priority: 'Low', project: 'Project 1' },
    { id: 14, title: 'Integrate third-party API', priority: 'Medium', project: 'Project 2' },
    { id: 15, title: 'Optimize images and assets', priority: 'Low', project: 'Project 3' },
    { id: 16, title: 'Create landing page', priority: 'Medium', project: 'Project 1' },
    { id: 17, title: 'Conduct code review', priority: 'High', project: 'Project 3' },
    { id: 18, title: 'Implement push notifications', priority: 'Medium', project: 'Project 1' },
    { id: 19, title: 'Setup monitoring tools', priority: 'Medium', project: 'Project 2' },
    { id: 20, title: 'Conduct user testing', priority: 'High', project: 'Project 3' },
  ];
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <>
        <NavBar
          title={"Welcome Janakshan"}
          rightChild={<Avatar
            initials="JA"
            size={50}
            backgroundColor="#fff"
            textColor="#8000ff"
          />}
          onRightPress={() => { console.log('AVat') }}
        />

      </>

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
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#eee'
  },
  tab: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#8000ff',
    // backgroundColor: '#8000ff'
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
  userInfo: {
    backgroundColor: '#211C84',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  username: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 20
  },
});