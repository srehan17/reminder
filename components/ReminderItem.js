import Checkbox from 'expo-checkbox';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RemindersContext } from '../App';

// const ReminderItem = () => {
const ReminderItem = ({item}) => {
    const {reminders, setReminders } = useContext(RemindersContext);

    const [checkboxState, setCheckboxState] = useState(item.completed);
  
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <View style={styles.row}>
            <View style={styles.col1}>
                <Text style={checkboxState ? styles.checked : styles.listItemText}>{item.text} </Text>
            </View>
            <View style={styles.col2}>
                <Text style={checkboxState ? styles.checked : styles.listItemText}>{item.date.substring(4,21)}</Text>
            </View>
            <TouchableOpacity style={styles.checkboxwrapper}>
                <Checkbox style={styles.checkbox} value={checkboxState} onValueChange={(v)=>{console.log(`>>${v}<<`); setCheckboxState(v)}}  />      
            </TouchableOpacity>
        </View>
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
        // flex:1
    },
    col1:{
        flex:2
    },
    col2:{
        flex:3
    },
    checkboxwrapper:{
        flex:1
    },
    checked:{
        fontSize: 18,
        textDecorationLine:'line-through',
        textDecorationStyle: 'solid',
        textDecorationColor: 'red',
        // textAlign:'center'
    },
});

export default ReminderItem;