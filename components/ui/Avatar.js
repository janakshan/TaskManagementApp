// components/ui/Avatar.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Avatar = ({
    initials,
    size = 40,
    backgroundColor = '#fff',
    textColor = '#000',
    fontSize,
    onPress,
    style
}) => {
    // Default font size is proportional to avatar size
    const calculatedFontSize = fontSize || Math.floor(size * 0.4);

    // Create the avatar component
    const avatarContent = (
        <View
            style={[
                styles.avatar,
                {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    backgroundColor
                },
                style
            ]}
        >
            <Text
                style={[
                    styles.avatarText,
                    {
                        color: textColor,
                        fontSize: calculatedFontSize
                    }
                ]}
            >
                {initials}
            </Text>
        </View>
    );

    // If onPress is provided, wrap in TouchableOpacity
    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                {avatarContent}
            </TouchableOpacity>
        );
    }

    // Otherwise return the plain View
    return avatarContent;
};

const styles = StyleSheet.create({
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        fontWeight: 'bold',
    },
});

export default Avatar;