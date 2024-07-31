import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BagPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bag Screen</Text>
      {/* Tambahkan konten keranjang belanja Anda di sini */}
      <Text>Ini adalah keranjang belanja Anda.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
export default BagPage;
