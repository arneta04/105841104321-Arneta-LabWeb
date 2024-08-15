import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';

const WomenTops = () => {
    const categories = ['T-shirts', 'Crop tops', 'Blouses', 'Dress'];
    const [products, setProducts] = useState([
        {
            name: 'T-shirt SPANISH',
            image: require('./assets/gambar/5.png'),
            price: 95,
            rating: 5,
            ratingCount: 6,
            loved: false,
        },
        {
            name: 'Blouse',
            image: require('./assets/gambar/6.png'),
            price: 148,
            rating: 5,
            ratingCount: 0,
            loved: false,
        },
        {
            name: 'Light blouse',
            image: require('./assets/gambar/7.png'),
            price: 148,
            rating: 5,
            ratingCount: 0,
            loved: false,
        },
        {
            name: 'Shirt',
            image: require('./assets/gambar/8.png'),
            price: 95,
            rating: 5,
            ratingCount: 13,
            loved: false,
        },
    ]);

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
                <TouchableOpacity>
                    <Image source={require('./assets/gambar/kembali.webp')} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Women's tops</Text>
                <Image source={require('./assets/gambar/search.png')} style={styles.searchIcon} />
            </View>

            <ScrollView horizontal contentContainerStyle={styles.categoryContainer}>
                {categories.map((category, index) => (
                    <TouchableOpacity key={index} style={styles.categoryButton}>
                        <Text style={styles.categoryText}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterButton}>
                    <Image source={require('./assets/gambar/filter.svg')} style={styles.filterIcon} />
                    <Text style={styles.filterText}>Filters</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sortButton} onPress={() => sortProductsByPrice(true)}>
                    <Text style={styles.sortText}>Price: lowest to high</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={products}
                renderItem={({ item, index }) => (
                    <View style={styles.productItem}>
                        <Image source={item.image} style={styles.productImage} />
                        <View style={styles.productDetails}>
                            <Text style={styles.productName}>{item.name}</Text>
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
                numColumns={2} 
                columnWrapperStyle={styles.columnWrapper}
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
        marginBottom: 10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    backIcon: {
        width: 20,
        height: 20,
    },
    searchIcon: {
        width: 24,
        height: 24,
    },
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        paddingBottom: 10,
    },
    categoryButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'black',
        marginHorizontal: 5,
        borderRadius: 20,
    },
    categoryText: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    filterText: {
        fontSize: 16,
    },
    sortButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sortText: {
        fontSize: 16,
    },
    productList: {
        marginTop: 10,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    productItem: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        flex: 1,
        marginHorizontal: 10,
    },
    productImage: {
        width: '100%',  
        height: 200,    
        borderRadius: 10,
        marginBottom: 10,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
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
        position: 'absolute',
        top: 10,
        right: 10,
    },
    loveIcon: {
        width: 24,
        height: 24,
    },
    starIcon: {
        width: 14,
        height: 14,
        marginRight: 2,
    },
    ratingText: {
        fontSize: 14,
        marginLeft: 4,
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