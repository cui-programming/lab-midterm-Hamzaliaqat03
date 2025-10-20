import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native'; // You may switch Text to ui/Text later
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';
import { Button } from '../ui';
import TextInput from '../ui';

/**
 * Custom/TasbihList
 * Renders a FlatList of azkaar with their counts.
 * NOTE: Increment/Decrement buttons are intentionally NOT implemented.
 * Students will add + and - controls using UI/Button and update state accordingly.
 */
export default function TasbihList({ searchText, setSearchText }) {
  const [items, setItems] = useState(initialAzkaar);






  const increment = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) => {

        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      })
    );
  };

  const decrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) => {





        if (item.id === id) {
          if (item.count > 0) {
            return { ...item, count: item.count - 1 };
          }
        }
        return item;
      })
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>

      <Button children="+" onPress={() => increment(item.id)} />
      <Button children="-" onPress={() => decrement(item.id)} />

      {/* TODO: Add increment/decrement buttons here using ui/Button */}
    </View>

  );


  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
        
    </View>
  );
}
