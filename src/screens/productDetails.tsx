import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getProductById } from '../services/api';

const ProductDetailScreen = ({ route }) => {
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then(response => setProduct(response.data[0]))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <View style={styles.container}>
      {product ? (
        <>
          {/* <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>${product.price}</Text> */}
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
