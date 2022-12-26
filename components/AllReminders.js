import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const AllReminders = (props) => {
    return (
    <View style={styles.container}>
      
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{props.item.text}</Text>
        <FontAwesome name="remove" size={24} color="orange" onPress={() => props.deleteItem(props.item.id)} />      
      </View>
    </TouchableOpacity>
      <TouchableOpacity style={styles.btn} 
          onPress={onPressViewAllReminders}>
            <Text styles={styles.btnText}>
                View All Reminders
            </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  btn: {
    backgroundColor: 'orange',
    padding: 5,
    margin: 20,
    height:50,
    width:"80%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: 20, 
    marginBottom: 30
  },
  btnText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center'
  },
    listItem: {
        padding: 15,
        backgroundColor: '#eee',
        borderBottomWidth: 1,
        borderColor: '#ebe'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18
    }
});

export default AllReminders;