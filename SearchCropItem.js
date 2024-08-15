import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchCropItem = () => {
    return (
        <View style={styles.container}>
            {/* Header dengan tombol back dan judul */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Crop the item</Text>
            </View>

            {/* Gambar dengan kotak crop */}
            <View style={styles.imageContainer}>
                <Image
                    source={require('./assets/gambar/8.png')} 
                    style={styles.image}
                />
                <View style={styles.cropBox} />
            </View>

            {/* Tombol Search */}
            <TouchableOpacity style={styles.searchButton}>
                <Ionicons name="search" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
    },
    backButton: {
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    cropBox: {
        position: 'absolute',
        borderWidth: 2,
        borderColor: 'black',
        width: 150,
        height: 150,
        top: '10%', 
    },
    searchButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 40,
        width: 60,
        height: 60,
    },
});

export default SearchCropItem;