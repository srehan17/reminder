import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const ListItem = (props) => {
  
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <View style={styles.row}>
          <Text style={styles.listItemText}>{props.item.text} </Text>
          <Text style={styles.listItemText}>{props.item.date.substring(4,21)}</Text>
        </View>
          {/* <FontAwesome name="remove" size={24} color="orange" 
            // onPress={() => props.deleteItem(props.item.id)} 
            />       */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        // backgroundColor: 'green',        
        borderBottomWidth: 1,
        borderColor: '#ebe'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row: {
      flexDirection: 'row',
      flex:1,
      flexWrap:'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: "80%",
    },
    listItemText: {
        fontSize: 18,
    },
});

export default ListItem;