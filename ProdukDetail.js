import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ProductDetailScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    setModalVisible(true);
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={24} color="black" />
        <FontAwesome name="heart-o" size={24} color="black" />
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScrollContainer}>
        <Image
          source={require('./assets/gambar/p1.png')} 
          style={styles.sideImage}
        />
        <Image
          source={require('./assets/gambar/p2.png')}
          style={styles.sideImage}
        />
      </ScrollView>

      <View style={styles.columnContainer}>
        <View style={styles.column}>
          <Text style={styles.columnTitle}></Text>
          <TouchableOpacity>
            <FontAwesome name="chevron-down" size={16} color="black" style={styles.downArrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <Text style={styles.columnTitle}></Text>
          <TouchableOpacity>
            <FontAwesome name="chevron-down" size={16} color="black" style={styles.downArrow} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>H&M</Text>
        <Text style={styles.productSubTitle}>Short black dress</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="gold" />
          <FontAwesome name="star" size={16} color="gold" />
          <FontAwesome name="star" size={16} color="gold" />
          <FontAwesome name="star" size={16} color="gold" />
          <FontAwesome name="star-half" size={16} color="gold" />
          <Text style={styles.ratingText}>(109)</Text>
        </View>
        <Text style={styles.productPrice}>$19.99</Text>
        <Text style={styles.productDescription}>
          Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed...
        </Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>

      {/* Modal untuk memilih ukuran */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Pilih Ukuran</Text>
            {sizes.map((size) => (
              <Pressable
                key={size}
                style={[
                  styles.sizeButton,
                  { backgroundColor: selectedSize === size ? '#FF3D00' : 'white' }
                ]}
                onPress={() => handleSelectSize(size)}
              >
                <Text style={[styles.sizeText, { color: selectedSize === size ? 'white' : 'black' }]}>{size}</Text>
              </Pressable>
            ))}
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 50, 
  },
  imageScrollContainer: {
    height: 300, 
  },
  sideImage: {
    width: 300, 
    height: 500, 
    resizeMode: 'cover',
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  column: {
    flex: 1,
    height: 50, 
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    borderWidth: 1, 
    borderColor: '#ddd', 
    borderRadius: 8, 
  },
  columnTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  downArrow: {
    marginLeft: 'auto', 
  },
  productDetails: {
    padding: 20,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  productSubTitle: {
    fontSize: 16,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ratingText: {
    marginLeft: 5,
    color: '#666',
  },
  productPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
  addToCartButton: {
    backgroundColor: '#FF3D00', 
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
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
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sizeButton: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  sizeText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
  },
});