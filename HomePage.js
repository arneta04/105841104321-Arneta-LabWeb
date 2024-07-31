import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const scrollViewRef = useRef(null);
  const [scale, setScale] = useState(new Animated.Value(1));
  const [opacity, setOpacity] = useState(new Animated.Value(1));
  const [scrollX, setScrollX] = useState(0);

  const images = [
    { id: 1, source: require('./assets/gambar/fashion1.jpg') },
    { id: 2, source: require('./assets/gambar/fashion2.jpg') },
    { id: 3, source: require('./assets/gambar/fashion3.jpg') },
    { id: 4, source: require('./assets/gambar/fashion4.jpg') },
    { id: 5, source: require('./assets/gambar/fashion5.jpg') },
  ];

  const imageWidth = 250; // Sesuaikan dengan lebar gambar
  const margin = 16; // Sesuaikan dengan margin antar gambar

  const scrollToRight = () => {
    const nextPosition = scrollX + imageWidth + margin;
    if (nextPosition < (imageWidth + margin) * images.length) {
      scrollViewRef.current.scrollTo({ x: nextPosition, animated: true });
      setScrollX(nextPosition);
    } else {
      scrollViewRef.current.scrollToEnd({ animated: true });
      setScrollX((imageWidth + margin) * (images.length - 1));
    }
  };

  const handleTouchStart = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1.1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleTouchEnd = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              scrollViewRef.current?.scrollable?.contentOffset?.x >=
                index * imageWidth &&
                scrollViewRef.current?.scrollable?.contentOffset?.x <
                  (index + 1) * imageWidth
                ? styles.activeDot
                : null,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Gambar besar di atas */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/gambar/fashion-top.jpg')} // Ganti dengan jalur gambar yang sesuai
          style={styles.largeImage}
        />
        <Text style={styles.titleOverlay}>Fashion Sale</Text>
      </View>

      {/* Kolom yang bisa diklik */}
      <TouchableOpacity style={styles.checkButton} onPress={() => alert('Check pressed!')}>
        <Text style={styles.checkButtonText}>Check</Text>
      </TouchableOpacity>

      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
          ref={scrollViewRef}
          onScroll={(event) => setScrollX(event.nativeEvent.contentOffset.x)}
          scrollEventThrottle={16}
        >
          {images.map((image) => (
            <Animated.View
              key={image.id}
              style={[
                styles.imageWrapper,
                {
                  transform: [{ scale: scale }],
                  opacity: opacity,
                },
              ]}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <Image source={image.source} style={styles.image} />
            </Animated.View>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.arrowButton} onPress={scrollToRight}>
          <Ionicons name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      {renderDots()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative', // Menjadikan kontainer sebagai referensi posisi
    marginBottom: 16,
  },
  titleOverlay: {
    position: 'absolute', // Menempatkan teks di atas gambar
    left: 16,
    top: 16,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background semi-transparan untuk teks
    padding: 8,
    borderRadius: 5,
  },
  largeImage: {
    width: '100%', // Mengisi lebar layar
    height: 600, // Atur tinggi sesuai kebutuhan
    borderRadius: 10,
  },
  checkButton: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    paddingHorizontal: 8,
  },
  imageWrapper: {
    marginRight: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 250, // Sesuaikan lebar gambar
    height: 400, // Sesuaikan tinggi gambar
    borderRadius: 10,
  },
  arrowButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});

export default HomeScreen;
