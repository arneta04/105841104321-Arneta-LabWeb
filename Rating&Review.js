import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Switch, Modal, TextInput, Button } from 'react-native';

const initialReviews = [
    {
        id: '1',
        name: 'Helene Moore',
        date: 'June 5, 2019',
        rating: 4,
        review:
            "The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7\" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.",
        avatar: require('./assets/gambar/p1.png'),
        photo: require('./assets/gambar/p1.png'),
        
    },
    {
        id: '2',
        name: 'Kate Doe',
        date: 'June 7, 2019',
        rating: 5,
        review:
        'Amazing dress! It fit me like a glove. Highly recommend it for any event or casual day out.',
        avatar: require('./assets/gambar/p2.png'),
        photo: require('./assets/gambar/p1.png'),
    },
    
];

const App = () => {
    const [withPhoto, setWithPhoto] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [newReview, setNewReview] = useState('');
    const [newRating, setNewRating] = useState(0);
    const [reviews, setReviews] = useState(initialReviews);
    const [newPhoto, setNewPhoto] = useState(null); 

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Text key={i} style={styles.star}>
                    {i < rating ? '★' : '☆'}
                </Text>
            );
        }
        return stars;
    };

    const handleAddReview = () => {
        const newReviewData = {
            id: (reviews.length + 1).toString(),
            name: 'New User',
            date: new Date().toLocaleDateString(),
            rating: newRating,
            review: newReview,
            photo: newPhoto,
            avatar: require('./assets/gambar/c4.png'), 
        };

        setReviews([...reviews, newReviewData]); 
        setModalVisible(false);
        setNewReview('');
        setNewRating(0);
        setNewPhoto(null);
    };

    const renderItem = ({ item }) => (
        <View style={styles.reviewContainer}>
            <View style={styles.reviewHeader}>
                <Image
                    source={item.avatar}
                    style={styles.avatar}
                />
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
            </View>
            <View style={styles.rating}>
                {renderStars(item.rating)}
            </View>
            
            {/* Garis horizontal di bawah rating */}
            <View style={styles.separator} />

            <Text style={styles.reviewText}>{item.review}</Text>
            
            {/* Menampilkan foto jika ada */}
            {item.photo && withPhoto && (
                <Image
                    source={item.photo}
                    style={styles.reviewPhoto}
                    resizeMode="cover"
                />
            )}
        </View>
    );

    const calculateAverageRating = () => {
        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (total / reviews.length).toFixed(1); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.ratingTitle}>Rating & Reviews</Text>
            <View style={styles.headerRating}>
                <Text style={styles.ratingScore}>{calculateAverageRating()}</Text>
                <View style={styles.ratingStars}>{renderStars(Math.round(calculateAverageRating()))}</View>
            </View>
            <Text style={styles.totalRatings}>{reviews.length} ratings</Text>
            
            <View style={styles.photoToggleContainer}>
                <Switch value={withPhoto} onValueChange={(value) => setWithPhoto(value)} />
                <Text>With photo</Text>
            </View>

            <FlatList
                data={reviews}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />

            <TouchableOpacity style={styles.reviewButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.reviewButtonText}>Write a review</Text>
            </TouchableOpacity>

            {/* Modal untuk menulis review */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Write a Review</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Your review"
                            value={newReview}
                            onChangeText={setNewReview}
                        />
                        <View style={styles.ratingContainer}>
                            <Text>Rating:</Text>
                            {renderStars(newRating)}
                            {[1, 2, 3, 4, 5].map((star) => (
                                <TouchableOpacity key={star} onPress={() => setNewRating(star)}>
                                    <Text style={styles.star}>{star <= newRating ? '★' : '☆'}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <Button title="Upload Photo" onPress={() => { /* Logika untuk mengunggah foto */ }} />
                        <Button title="Submit" onPress={handleAddReview} />
                        <Button title="Cancel" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    ratingTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerRating: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
    },
    ratingScore: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    totalRatings: {
        fontSize: 18,
        color: 'gray',
    },
    ratingStars: {
        flexDirection: 'row',
    },
    reviewContainer: {
        marginBottom: 16,
    },
    reviewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    name: {
        fontWeight: 'bold',
    },
    date: {
        color: 'gray',
    },
    rating: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    star: {
        fontSize: 16,
        color: '#ffcc00',
    },
    reviewText: {
        fontSize: 14,
        color: '#333',
    },
    reviewPhoto: {
        width: '100%',
        height: 200,
        marginTop: 8,
        borderRadius: 8,
    },
    photoToggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    reviewButton: {
        backgroundColor: '#ff0000',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    reviewButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginVertical: 8,
    },
});

export default App;