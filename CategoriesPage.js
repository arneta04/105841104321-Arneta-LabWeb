import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';

const CategoriesPage = ({ }) => {

    const categories = ['Women', 'Men', 'Kids'];
    const subcategories = [
        { name: 'New', image: require('./assets/gambar/c1.png') },
        { name: 'Shoes', image: require('./assets/gambar/c3.png') },
        { name: 'Accessories', image: require('./assets/gambar/c4.png') },
        { name: 'Clothes', image: require('./assets/gambar/c2.png') },
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Categories</Text>
                    <Image source={require('./assets/gambar/search.png')} style={styles.searchIcon} />
                </View>

                <View style={styles.categoryContainer}>
                    {categories.map((category, index) => (
                        <TouchableOpacity key={index} style={styles.categoryButton} onPress={() => {/* Handle category press */}}>
                            <Text style={styles.categoryText}>{category}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style={styles.promoButton} onPress={() => {}}>
                    <Text style={styles.promoButtonText}>SUMMER SALES</Text>
                    <Text style={styles.promoButtonText}>Up to 50% Off</Text>
                </TouchableOpacity>

                <FlatList
                    data={subcategories}
                    renderItem={({ item }) => (
                        <View style={styles.subcategoryItem}>
                            <TouchableOpacity style={styles.subcategoryButton} onPress={() => {}}>
                                <Text style={styles.subcategoryText}>{item.name}</Text>
                            </TouchableOpacity>
                            <Image source={item.image} style={styles.subcategoryImage} />
                        </View>
                    )}
                    keyExtractor={(item) => item.name}
                    style={styles.subcategoryContainer}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        padding: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 34,
        fontWeight: 'bold',
    },
    searchIcon: {
        width: 34,
        height: 24,
    },
    categoryContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingBottom: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    categoryButton: {
        padding: 10,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    promoButton: {
        backgroundColor: '#ff4d4d',
        padding: 50,
        borderRadius: 15,
        alignItems: 'center',
        marginVertical: 20,
    },
    promoButtonText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
    },
    subcategoryContainer: {
        marginTop: 10,
    },
    subcategoryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    subcategoryButton: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        alignItems: 'flex-start',
    },
    subcategoryText: {
        fontSize: 30,
    },
    subcategoryImage: {
        width: 100,
        height: 100,
        marginLeft: 0,
        borderRadius: 5,
    },
});


export default CategoriesPage;