import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, Image, SafeAreaView } from 'react-native';
import searchIcon from './assets/gambar/search.png'; 

const categories = ['Tops','Shirts & Blouses','Cardigans & Sweaters','Knitwear','Blazers','Outerwear','Pants','Jeans','Shorts','Skirts','Dresses'];

const Categories = () => {
    const handleViewAllItems = () => {
        Alert.alert('View All Items', 'You pressed View All Items');
    };

    const handleCategorySelect = (category) => {
        Alert.alert('Category Selected', `You selected ${category}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Categories</Text>
                <Image source={searchIcon} style={styles.searchIcon} />
            </View>
            <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAllItems}>
                <Text style={styles.viewAllText}>VIEW ALL ITEMS</Text>
            </TouchableOpacity>
            <Text style={styles.chooseCategory}>Choose Category</Text>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.categoryButton}
                        onPress={() => handleCategorySelect(item)}
                    >
                        <Text style={styles.categoryText}>{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    searchIcon: {
        width: 34,
        height: 34,
    },
    viewAllButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 16,
    },
    viewAllText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'light',
    },
    chooseCategory: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'grey',
    },
    categoryButton: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    categoryText: {
        fontSize: 16,
    },
});

export default Categories;