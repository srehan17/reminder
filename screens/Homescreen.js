import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const HomeScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>    
            <TouchableOpacity style={styles.btn}
                onPress={() =>
                navigation.navigate('CreateReminderScreen', {title:'Set a Reminder'})
                } >
                <Text styles={styles.btnText}>
                    Set a Reminder
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.btn}
                onPress={() =>
                // navigation.navigate('ListOfRemindersScreen', {title:'View all Reminders'})
                navigation.navigate({name:'ListOfRemindersScreen', params:{data:items, merge:true}})
                } >
                <Text styles={styles.btnText}>
                    View all Reminders
                </Text>
            </TouchableOpacity> */}
        </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop:100
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
    },
    btnText: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center'
    },
  });  

  export default HomeScreen;