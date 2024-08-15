import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
    return (
        <View style={styles.container}>
            {/* Main Image */}
            <Image
                source={require('./assets/gambar/8.png')}  
                style={styles.image}
            />

            {/* Icons Container */}
            <View style={styles.iconsContainer}>
                {/* Flash Icon */}
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="flash-on" size={30} color="#fff" />
                </TouchableOpacity>

                {/* Camera Icon */}
                <TouchableOpacity style={styles.cameraButton}>
                    <Icon name="photo-camera" size={30} color="#fff" />
                </TouchableOpacity>

                {/* Reload Icon */}
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="refresh" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    iconsContainer: {
        position: 'absolute',
        bottom: 30,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    iconButton: {
        backgroundColor: '#ff3d00',
        padding: 15,
        borderRadius: 50,
        marginHorizontal: 10,
    },
    cameraButton: {
        backgroundColor: '#ff3d00',
        padding: 15,
        borderRadius: 50,
        marginHorizontal: 10,
    },
});