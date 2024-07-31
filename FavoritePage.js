import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoritePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Screen</Text>
      {/* Tambahkan konten favorit Anda di sini */}
      <Text>Ini adalah daftar favorit Anda.</Text>
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

export default FavoritePage;
