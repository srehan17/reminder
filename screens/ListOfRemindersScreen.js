import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ListOfReminders from '../components/ListOfReminders';

const ListOfRemindersScreen = ({navigation, route}) => {
    const displayText = 'No reminders yet';
    return (
    <View style={styles.container}>
      {(route.params.data.length == 0) ?
        <View style={styles.reminderRow}>
          <Text>{displayText}</Text> 
        </View>
        : <ListOfReminders items={route.params.data}/> 
      }  
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      paddingTop: 60,
    },
    reminderRow: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap:'wrap',
      padding: 15,
      margin:10,
      borderBottomWidth: 1,
      borderWidth: 1,
      borderColor: '#ebe'
    },
    listItem: {
      padding: 15,
      // backgroundColor: 'green',        
      borderBottomWidth: 1,
  },
});  

export default ListOfRemindersScreen;