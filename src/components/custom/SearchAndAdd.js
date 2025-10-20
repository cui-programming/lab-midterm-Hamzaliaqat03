import React from 'react';
import { View } from 'react-native';
import { styles } from '../../styles/styles';
import { TextInput, Button } from '../ui';

/**
 * Custom/SearchAndAdd
 * Students implement:
 *  - a text box to add a new zikr (phrase only, count starts at 0)
 *  - a search box to filter existing azkaar by phrase
 *  - use only components from 'ui' for inputs and buttons
 *  - lifting state up if needed
 */
export default function SearchAndAdd() {


  



  return (
    <View style={styles.section}>
      
      <TextInput placeholder="Search Azkaar" style={styles.input} />
      <Button children="Search" onPress={() => {}} />


      <TextInput placeholder="New Zikr Phrase" style={styles.input} />
      <Button children="Add Zikr" onPress={() => {}} />
      {/* TODO: Implement search and add UI here using ui/TextInput and ui/Button */}
    </View>
  );
}
