import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface ProductProps {
  image: string;
  name: string;
  category: string;
  price: string;
  onAddToBag: () => void;
}

const Product: React.FC<ProductProps> = ({ image, name, category, price, onAddToBag }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.categoryContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.weight}>{price}</Text>
        <TouchableOpacity style={styles.addButton} onPress={onAddToBag}>
          <Text style={styles.addButtonText}>Add to Bag</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    resizeMode: 'cover',
  },
  categoryContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    fontSize: 16,
    marginBottom: 5,
  },
  weight: {
    fontSize: 14,
    marginBottom: 10,
    color: '#666666',
  },
  addButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderColor: '#007bff',
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Product;
