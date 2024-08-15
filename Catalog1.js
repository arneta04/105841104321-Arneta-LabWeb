import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';

const WomenTops = () => {
    const categories = ['T-shirt', 'Blouse', 'Dress', 'Crop Tops', ];
    const products = [
        {
            name: 'Pullover',
            image: require('./assets/gambar/1.png'),
            color: 'Black',
            size: 'M',
            price: 51,
            rating: 5,
            ratingCount: 6,
            loved: false,
        },
        {
            name: 'Blouse',
            image: require('./assets/gambar/2.png'),
            color: 'White',
            size: 'L',
            price: 34,
            rating: 0,
            ratingCount: 0,
            loved: false,
        },
        {
            name: 'T-shirt',
            image: require('./assets/gambar/3.png'),
            color: 'Black',
            size: 'L',
            price: 12,
            rating: 0,
            ratingCount: 0,
            loved: false,
        },
        {
            name: 'Shirt',
            image: require('./assets/gambar/4.png'),
            color: 'Black',
            size: 'L',
            price: 51,
            rating: 5,
            ratingCount: 13,
            loved: false,
        },
    ];

    const renderStars = (rating, ratingCount) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Image
                    key={i}
                    source={i <= rating ? require('./assets/gambar/Star-full.png') : require('./assets/gambar/Star.png')}
                    style={styles.starIcon}
                />
            );
        }
        if (ratingCount > 0) {
            stars.push(
                <Text key="ratingCount" style={styles.ratingText}>
                    ({ratingCount})
                </Text>
            );
        }
        return stars;
    };

    const toggleLove = (index) => {
        const newProducts = [...products];
        newProducts[index].loved = !newProducts[index].loved;
        setProducts(newProducts);
    };

    const sortProductsByPrice = (ascending) => {
        const sortedProducts = [...products].sort((a, b) =>
            ascending ? a.price - b.price : b.price - a.price
        );
        setProducts(sortedProducts);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Women Tops</Text>
                <Image source={require('./assets/gambar/search.png')} style={styles.searchIcon} />
            </View>

            <ScrollView horizontal contentContainerStyle={styles.categoryContainer}>
                {categories.map((category, index) => (
                    <TouchableOpacity key={index} style={styles.categoryButton} onPress={() => {/* Handle category press */}}>
                        <Text style={styles.categoryText}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(true)}>
                    <Text style={styles.filterText}>Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(true)}>
                    <Text style={styles.filterText}>Price: Low to High</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(false)}>
                    <Text style={styles.filterText}>Price: High to Low</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={products}
                renderItem={({ item, index }) => (
                    <View style={styles.productItem}>
                        <Image source={item.image} style={styles.productImage} />
                        <View style={styles.productDetails}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productColor}>Color: {item.color}</Text>
                            <Text style={styles.productSize}>Size: {item.size}</Text>
                            <View style={styles.ratingContainer}>
                                {renderStars(item.rating, item.ratingCount)}
                            </View>
                            <Text style={styles.productPrice}>${item.price}</Text>
                        </View>
                        <TouchableOpacity style={styles.loveButton} onPress={() => toggleLove(index)}>
                            <Image source={item.loved ? require('./assets/gambar/favorites-activated.png') : require('./assets/gambar/favorites-inactive.png')} style={styles.loveIcon} />
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                style={styles.productList}
            />
            <View style={styles.navContainer}>
                                <TouchableOpacity style={styles.navButton}>
                                        <Image source={require('./assets/gambar/home.png')} style={styles.navIcon} />
                                        <Text style={styles.navText}>Home</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.navButton}>
                                        <Image source={require('./assets/gambar/shop-aktif.png')} style={styles.navIcon} />
                                        <Text style={styles.navText}>Shop</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.navButton}>
                                        <Image source={require('./assets/gambar/bag-inactive.png')} style={styles.navIcon} />
                                        <Text style={styles.navText}>Bag</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.navButton}>
                                        <Image source={require('./assets/gambar/favorites-inactive.png')} style={styles.navIcon} />
                                        <Text style={styles.navText}>Favorites</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.navButton}>
                                        <Image source={require('./assets/gambar/profil-inactive.png')} style={styles.navIcon} />
                                        <Text style={styles.navText}>Profile</Text>
                                </TouchableOpacity>
                        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 38,
        fontWeight: 'bold',
    },
    searchIcon: {
        width: 30,
        height: 30,
    },
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingBottom: 10,
        zIndex: 1,
    },
    categoryButton: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: 'black',
        marginHorizontal: 10,
        borderRadius: 20,
    },
    categoryText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    filterButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: 10,
    },
    filterText: {
        fontSize: 16,
    },
    productList: {
        marginTop: 10,
    },
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#f4f4f4',
        padding: 10,
        borderRadius: 10,
    },
    productImage: {
        width: 80,
        height: 80,
        marginRight: 15,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productColor: {
        fontSize: 14,
        color: '#777',
    },
    productSize: {
        fontSize: 14,
        color: '#777',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    loveButton: {
        padding: 5,
    },
    loveIcon: {
        width: 20,
        height: 20,
    },
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#f4f4f4',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
},
navButton: {
        alignItems: 'center',
},
navIcon: {
        width: 24,
        height: 24,
        marginBottom: 5,
},
navText: {
        fontSize: 12,
},
});

export default WomenTops;