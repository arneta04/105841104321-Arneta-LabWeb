import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const initialItems = [
  { id: '1', image: require('./assets/gambar/D6.jpg'), title: 'Blue sea Dress', cost: 59.99 },
  { id: '2', image: require('./assets/gambar/D7.jpg'), title: 'Green watermelon', cost: 49.99 },
  { id: '3', image: require('./assets/gambar/D8.jpeg'), title: 'Charcoal Grey Maxi Dress', cost: 79.99 },
  { id: '4', image: require('./assets/gambar/D9.jpg'), title: 'Classic White T-Shirt', cost: 89.99 },
  { id: '5', image: require('./assets/gambar/D10.png'), title: 'Elegant Pink Dress', cost: 99.99 },
];

const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState(initialItems);

  const removeItem = (itemId) => {
    setFavorites(favorites.filter(item => item.id !== itemId));
  };

  const currencyFormat = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const renderFavorite = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{currencyFormat(item.cost)}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={() => removeItem(item.id)}>
          <Text style={styles.deleteButtonText}>Hapus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Kembali</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favorit ku</Text>
      </View>
      {favorites.length ? (
        <FlatList
          data={favorites}
          renderItem={renderFavorite}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Tidak ada item favorit saya.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backText: {
    fontSize: 16,
    color: '#f00',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  details: {
    marginLeft: 14,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  price: {
    fontSize: 14,
    color: '#333',
  },
  deleteButton: {
    marginTop: 8,
    backgroundColor: '#f00',
    width: 100,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#777',
  },
});

export default FavoritesScreen;