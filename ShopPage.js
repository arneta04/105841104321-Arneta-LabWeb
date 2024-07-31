import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';

const ShopPage = () => {
  const [selectedTab, setSelectedTab] = useState('Sale');

  const saleProducts = [
    {
      id: '1',
      name: 'Evening Dress',
      image: require('./assets/gambar/fashion1.jpg'),
      price: 125,
      discount: 20,
    },
    {
        id: '2',
        name: 'Sport Dress',
        image: require('./assets/gambar/fashion2.jpg'),
        price: 215.99,
      discount: 15,
    },
    {
      id: '3',
      name: 'Sport Pant',
      image: require('./assets/gambar/fashion3.jpg'),
      price: 149,
      discount: 10,
    },
    {
        id: '4',
        name: 'Casual Shirt',
        image: require('./assets/gambar/fashion4.jpg'),
        price: 89.99,
        discount: 5,
    },
    {
        id: '5',
        name: 'Casual Shirt',
        image: require('./assets/gambar/fashion5.jpg'),
        price: 189.99,
        discount: 5,
    },
];

const newProducts = [
    {
      id: '3',
      name: 'Sport Pant',
      image: require('./assets/gambar/fashion3.jpg'),
      price: 149,
      discount: 10,
    },
    {
        id: '4',
        name: 'Casual Shirt',
        image: require('./assets/gambar/fashion4.jpg'),
        price: 89.99,
        discount: 5,
    },
    {
        id: '5',
        name: 'Casual Shirt',
        image: require('./assets/gambar/fashion5.jpg'),
        price: 189.99,
        discount: 5,
    },
    {
        id: '2',
        name: 'Sport Dress',
        image: require('./assets/gambar/fashion2.jpg'),
        price: 215.99,
      discount: 15,
    },
    {
      id: '1',
      name: 'Evening Dress',
      image: require('./assets/gambar/fashion1.jpg'),
      price: 125,
      discount: 20,
    },
];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        {item.discount > 0 && (
          <Text style={styles.discount}>-{item.discount}%</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/gambar/fashion-top.jpeg')} style={styles.headerImage} />
        <Text style={styles.headerTitle}>Street Clothes</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Sale' ? styles.activeTab : null,
          ]}
          onPress={() => setSelectedTab('Sale')}
        >
          <Text style={[styles.tabText, selectedTab === 'Sale' ? styles.activeTabText : null]}>
            Sale
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'New' ? styles.activeTab : null,
          ]}
          onPress={() => setSelectedTab('New')}
        >
          <Text style={[styles.tabText, selectedTab === 'New' ? styles.activeTabText : null]}>
            New
          </Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'Sale' && (
        <FlatList
          data={saleProducts}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={renderItem}
          style={styles.productList}
          showsHorizontalScrollIndicator={false}
        />
      )}

      {selectedTab === 'New' && (
        <FlatList
          data={newProducts}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={renderItem}
          style={styles.productList}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'relative',
    marginBottom: 16,
  },
  headerImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  headerTitle: {
    position: 'absolute',
    top: 16,
    left: 16,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    borderRadius: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  activeTab: {
    backgroundColor: '#000',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
  },
  productList: {
    marginBottom: 16,
  },
  productContainer: {
    width: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 16,
  },
  productImage: {
    width: '100%',
    height: 250,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  discount: {
    fontSize: 14,
    color: 'red',
  },
});

export default ShopPage;
