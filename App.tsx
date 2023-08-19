import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet,Text } from 'react-native';
import Product from './src/components/Product';
import axios from 'axios';

interface ProductItem {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  const fetchProducts = async () => {
    try {
      const res: any = await axios.get('https://fakestoreapi.com/products?limit=10');
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProduct = ({ item }: { item: ProductItem }) => (
    <Product
      image={item.image}
      name={item.title}
      category={item.category}
      price={item.price}
      onAddToBag={() => {
        console.log('Add to Bag');
      }}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Ecommerce
      </Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#f0f0f0',
  },
  flatListContainer: {
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold', 
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
});

export default App;
