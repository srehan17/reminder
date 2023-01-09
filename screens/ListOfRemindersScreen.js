import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { RemindersContext } from '../App';
import ReminderItem from '../components/ReminderItem';

const ListOfRemindersScreen = ({navigation, route}) => {
    const {reminders, setReminders } = useContext(RemindersContext);

    const displayText = 'No reminders yet';
    return (
    <View style={styles.container}>
      {(reminders?.length === 0) ?
        <View style={styles.reminderRow}>
          <Text>{displayText}</Text> 
        </View>
        // : <ListOfReminders items={route.params.data}/>
        :
        <View>
          <View style={styles.reminderListHeadings}>
            <Text style={styles.heading}>Reminder</Text>
            <Text style={styles.heading}>DateTime</Text>
            <Text style={styles.heading}>Completed?</Text>
          </View>                       
          <FlatList 
            data={reminders} 
            renderItem={({item}) => (  
                <ReminderItem 
                    item={item}  
                  />
            )}
          /> 
        </View>
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
      borderBottomWidth: 1,
  },
  reminderListHeadings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:20,
    padding: 10
},
  heading:{
    fontSize:15,
    fontWeight:'bold',
    // flex:1,
    // padding:10,
    textAlign:'center'
},

});  

export default ListOfRemindersScreen;