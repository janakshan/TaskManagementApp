// components/ui/NavBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

{/* <NavBar
          title={"Welcome Janakshan"}
          leftChild={<View style={styles.avatar}>
            <Text style={styles.avatarText}>JA</Text>
          </View>}
        // onLeftPress={goToPreviousMonth}
        // onRightPress={goToNextMonth}
        /> */}


const NavBar = ({
    title,
    leftChild,
    rightChild,
    centerChild,
    backgroundColor = '#8000ff',
    onLeftPress,
    onRightPress
}) => {
    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
            <StatusBar
                backgroundColor={backgroundColor}
                barStyle="light-content"
            />
            <View style={[styles.container, { backgroundColor }]}>
                {/* Left side */}
                <View style={styles.side}>
                    {leftChild && (
                        <TouchableOpacity onPress={onLeftPress} style={styles.childContainer}>
                            {leftChild}
                        </TouchableOpacity>
                    )}
                </View>

                {/* Center/Title */}
                <View style={styles.center}>
                    {centerChild || (
                        <Text style={styles.title}>{title}</Text>
                    )}
                </View>

                {/* Right side */}
                <View style={styles.side}>
                    {rightChild && (
                        <TouchableOpacity onPress={onRightPress} style={styles.childContainer}>
                            {rightChild}
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        width: '100%',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80,
        paddingHorizontal: 16,
    },
    side: {
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    childContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default NavBar;