import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const initialProducts = [
  { id: 'product1', image: require('./assets/gambar/D1.jpeg'), name: 'Product 1', color: 'Yellow', size: 'M', price: 19.99 },
  { id: 'product2', image: require('./assets/gambar/D2.jpeg'), name: 'Product 2', color: 'Brown', size: 'L', price: 29.99 },
  { id: 'product3', image: require('./assets/gambar/D3.jpg'), name: 'Product 3', color: 'Green', size: 'S', price: 24.99 },
  { id: 'product4', image: require('./assets/gambar/D4.jpg'), name: 'Product 4', color: 'White', size: 'L', price: 34.99 },
  { id: 'product5', image: require('./assets/gambar/D5.jpg'), name: 'Product 5', color: 'Pink', size: 'M', price: 39.99 },
];

const BagPage = () => {
  const [quantities, setQuantities] = useState(initialProducts.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {}));
  const [promoCode, setPromoCode] = useState('');

  const handleQuantityChange = (id, amount) => {
    setQuantities((prevQuantities) => {
      const newQuantity = Math.max(0, (prevQuantities[id] || 1) + amount);
      const updatedQuantities = { ...prevQuantities, [id]: newQuantity };
      return newQuantity > 0 ? updatedQuantities : Object.fromEntries(Object.entries(updatedQuantities).filter(([key]) => key !== id));
    });
  };

  const calculateTotal = () => {
    return initialProducts.reduce((total, product) => total + (quantities[product.id] || 0) * product.price, 0).toFixed(2);
  };

  const filteredProducts = initialProducts.filter(product => quantities[product.id] > 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Bag</Text>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <Image source={product.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productInfo}>Color: {product.color}</Text>
              <Text style={styles.productInfo}>Size: {product.size}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => handleQuantityChange(product.id, -1)} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantities[product.id]}</Text>
                <TouchableOpacity onPress={() => handleQuantityChange(product.id, 1)} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.productPrice}>${(product.price * quantities[product.id]).toFixed(2)}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.emptyMessage}>Your bag is empty</Text>
      )}

      <View style={styles.promoContainer}>
        <Text style={styles.promoLabel}>Enter your promo code:</Text>
        <TextInput
          style={styles.promoInput}
          value={promoCode}
          onChangeText={setPromoCode}
          placeholder="Promo Code"
        />
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total Amount:</Text>
        <Text style={styles.totalAmount}>${calculateTotal()}</Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f4f7',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'red',  
    textAlign: 'center',
    fontFamily: 'HelveticaNeue-Medium',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',  
    fontFamily: 'HelveticaNeue-Medium',
  },
  productInfo: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
    fontFamily: 'HelveticaNeue-Light',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    width: 32,
    height: 32,
    backgroundColor: '#FFE4E1',  
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  quantityButtonText: {
    fontSize: 18,
    color: 'red',  
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 12,
    color: 'red',  
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',  
    marginTop: 8,
    fontFamily: 'HelveticaNeue-Bold',
  },
  promoContainer: {
    marginVertical: 20,
  },
  promoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',  
    fontFamily: 'HelveticaNeue-Medium',
  },
  promoInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginTop: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  totalContainer: {
    marginVertical: 20,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',  
    fontFamily: 'HelveticaNeue-Medium',
  },
  totalAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 8,
    color: 'red', 
    fontFamily: 'HelveticaNeue-Bold',
  },
  checkoutButton: {
    backgroundColor: 'red',  
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'HelveticaNeue-Medium',
  },
  emptyMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'red',  
    fontFamily: 'HelveticaNeue-Light',
  },
});



export default BagPage;