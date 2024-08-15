import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Slider from '@react-native-community/slider';

function DetailProduk({ image, name, description }) {
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('Red');
    const [priceRange, setPriceRange] = useState([78, 143]);
    const [selectedCategory, setSelectedCategory] = useState('Semua');

    const colors = ['Black', 'Red', 'Gray', 'Beige', 'Navy'];
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const categories = ['Semua', 'Wanita', 'Pria', 'Anak Laki-laki', 'Anak Perempuan'];

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => console.log('Kembali ditekan')}>
                <Text style={styles.backButtonText}>Kembali</Text>
            </TouchableOpacity>
            <Image source={image} style={styles.productImage} />
            <View style={styles.detailsContainer}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productDescription}>{description}</Text>

                <View style={styles.selectorContainer}>
                    <Text style={styles.selectorLabel}>Price Range:</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={78}
                        maximumValue={143}
                        step={1}
                        value={priceRange[0]}
                        onValueChange={(value) => setPriceRange([value, priceRange[1]])}
                        minimumTrackTintColor="#FF0000"
                        maximumTrackTintColor="#000000"
                    />
                    <Slider
                        style={styles.slider}
                        minimumValue={78}
                        maximumValue={143}
                        step={1}
                        value={priceRange[1]}
                        onValueChange={(value) => setPriceRange([priceRange[0], value])}
                        minimumTrackTintColor="#FF0000"
                        maximumTrackTintColor="#000000"
                    />
                    <Text style={styles.priceRangeText}>
                        Selected Range: ${priceRange[0]} - ${priceRange[1]}
                    </Text>
                </View>

                <View style={styles.selectorContainer}>
                    <Text style={styles.selectorLabel}>Color:</Text>
                    <FlatList
                        data={colors}
                        keyExtractor={(item) => item}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[
                                    styles.colorItem,
                                    selectedColor === item ? styles.selectedColor : null,
                                ]}
                                onPress={() => setSelectedColor(item)}
                            >
                                <View
                                    style={[
                                        styles.colorCircle,
                                        {
                                            backgroundColor:
                                                item === 'Black'
                                                    ? 'black'
                                                    : item === 'Red'
                                                    ? 'red'
                                                    : item === 'Gray'
                                                    ? 'gray'
                                                    : item === 'Beige'
                                                    ? '#f5f5dc'
                                                    : '#000080',
                                        },
                                    ]}
                                />
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View style={styles.selectorContainer}>
                    <Text style={styles.selectorLabel}>Size:</Text>
                    <View style={styles.sizeContainer}>
                        {sizes.map((size) => (
                            <TouchableOpacity
                                key={size}
                                style={[
                                    styles.sizeButton,
                                    selectedSize === size && styles.selectedSizeButton,
                                ]}
                                onPress={() => setSelectedSize(size)}
                            >
                                <Text style={styles.sizeButtonText}>{size}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    {categories.map((category) => (
                        <TouchableOpacity
                            key={category}
                            style={[
                                styles.categoryButton,
                                selectedCategory === category && styles.selectedCategoryButton,
                            ]}
                            onPress={() => setSelectedCategory(category)}
                        >
                            <Text style={styles.categoryButtonText}>{category}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.discardButton}>
                    <Text style={styles.buttonText}>Buang</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.applyButton}>
                    <Text style={styles.buttonText}>Terapkan</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backButton: {
        margin: 20,
        padding: 10,
        backgroundColor: 'gray',
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
    },
    productImage: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    productName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
    },
    categoryContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    categoryButton: {
        backgroundColor: '#f8f8f8',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginRight: 10,
    },
    selectedCategoryButton: {
        backgroundColor: 'red',
    },
    categoryButtonText: {
        color: 'black',
        fontSize: 16,
    },
    selectorContainer: {
        marginBottom: 20,
    },
    selectorLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    sizeContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    sizeButton: {
        backgroundColor: '#f8f8f8',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginRight: 10,
    },
    selectedSizeButton: {
        backgroundColor: 'red',
    },
    sizeButtonText: {
        color: 'black',
        fontSize: 16,
    },
    colorItem: {
        marginRight: 10,
        alignItems: 'center',
    },
    colorCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    selectedColor: {
        borderWidth: 2,
        borderColor: 'red',
    },
    slider: {
        width: '100%',
        height: 40,
    },
    priceRangeText: {
        fontSize: 16,
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    discardButton: {
        backgroundColor: 'gray',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    applyButton: {
        backgroundColor: 'red',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default DetailProduk;