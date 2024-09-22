import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { getProducts } from '../services/api';

const HomeScreen = (navigation: any) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => {
        console.log(products)
      }} >

        <View
          style={styles.testButton}>
          <Text>Hello</Text>
        </View>

        <FlatList
          data={products}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('productDetails', { id: item.id })}
            // onPress={() => { console.log(item) }}
            >
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
              <Image source={{ uri : item.image_url}} style={{ width:100, height:100 }} />
              <Text>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
