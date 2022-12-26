import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ListOfReminders = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.reminderListHeadings}>
                <Text style={styles.textHeading1}>Reminder</Text>
                <Text style={styles.textHeading2}>Date / Time</Text>
            </View>
            <View>{props.items.map((item, index) => {
                return (
                <View key={index} style={styles.row}>
                    <Text style={styles.text1}>{item.text}</Text>
                    <Text style={styles.text2}>{item.date.substring(0,21)}</Text>      
                </View>
            );
            })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:20
    },
    reminderListHeadings: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom:20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textHeading1:{
        fontSize:18,
        fontWeight:'bold',
        flex:1,
        padding:10
    },
    textHeading2:{
        fontSize:18,
        fontWeight:'bold',
        flex:1,
        padding:10
    },
    text1: {
        flex:1,
        padding: 10,
        backgroundColor: '#fff',
    },
    text2: {
        flex:1,
        padding: 10,
        backgroundColor: '#fff',
    },
});  

export default ListOfReminders;