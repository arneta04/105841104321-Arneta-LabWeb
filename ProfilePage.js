import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.profileContainer}>
        <Image source={require('./assets/gambar/Profil.jpg')} style={styles.profilePic} />
        <View>
          <Text style={styles.name}>ARNETA</Text>
          <Text style={styles.email}>Arneta@gmail.com</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>My Orders</Text>
        <Text style={styles.itemDescription}>You have 12 orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Shipping Addresses</Text>
        <Text style={styles.itemDescription}>3 Addresses</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Payment Methods</Text>
        <Text style={styles.itemDescription}>Visa **34</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Promo Codes</Text>
        <Text style={styles.itemDescription}>You have special promo codes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>My Reviews</Text>
        <Text style={styles.itemDescription}>Reviews for 4 items</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Settings</Text>
        <Text style={styles.itemDescription}>Notifications, password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: 'gray',
  },
  item: {
    marginBottom: 20,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    color: 'gray',
  },
});

export default ProfilePage;