import { StyleSheet } from 'react-native';

/**
 * 👉 Students: create all your styles here.
 * Start with: container, headerText, sectionTitle, itemRow, itemName, counter, input, button, etc.
 * Keep style names semantic.
 */
export const styles = StyleSheet.create({
  // e.g., container: { },
  // leave empty for now; using undefined styles is acceptable.

  button: {
    // flex: 1,
    // padding: 10,
    backgroundColor: '#007BFF' ,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    width: '70px',
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    width: '10%',
    color: 'grey',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    flex: 1,
  },
  iteambutton: {
flex:1  },
  counter: {
    flex: 1
  },
  headerText: {
    margin: 10,}
 
 

});
