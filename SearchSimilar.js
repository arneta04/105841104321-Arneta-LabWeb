import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Image source={require('./assets/gambar/search.png')} style={styles.searchIcon} />
                <Text style={styles.searchText}>Finding similar results...</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    searchText: {
        fontSize: 16,
        color: '#333',
    },
});

export default App;