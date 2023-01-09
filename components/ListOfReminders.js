import React, {useState} from 'react';
import CheckBox from 'expo-checkbox';
import { StyleSheet, View, Text } from 'react-native';

const ListOfReminders = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.reminderListHeadings}>
                <Text style={styles.textHeading}>Reminder</Text>
                <Text style={styles.textHeading}>DateTime</Text>
                <Text style={styles.textHeading}>Completed?</Text>
            </View>
            <View>{props.items.map((item, index) => {
                
                // const [checkboxState,setCheckboxState] = useState(false);
                console.log(item.text)
                console.log(item.completed)
                console.log(".........................")
            return (
                <View key={index} style={styles.row}>
                    <View style={styles.textwrapper}>
                        <Text style={item.completed ? styles.checked : styles.text}>{item.text}</Text>
                    </View>
                    <View style={styles.datewrapper}>
                        <Text style={item.completed ? styles.checked : styles.date}>{item.date.substring(4,21)}</Text>
                    </View>
                    <View style={styles.checkboxwrapper}>
                        <CheckBox style={styles.checkbox} value={item.completed} onValueChange={(v)=>{console.log(`>>${v}<<`);}}  />      
                    </View>
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
        padding:20,
    },
    reminderListHeadings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop:10,
        marginBottom:10,
        borderBottomColor:'#efe'
    },
    // checked:{
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems:'center',
    //     backgroundColor:'blue',
    //     marginTop:10,
    //     marginBottom:10,
    //     borderBottomColor:'#efe',
    //     textDecorationLine:'line-through',
    //     textDecorationStyle: 'solid',
    //     textDecorationColor: 'red',
    // },
    checked:{
        textDecorationLine:'line-through',
        textDecorationStyle: 'solid',
        textDecorationColor: 'red',
        textAlign:'center'
    },
    textHeading:{
        fontSize:15,
        fontWeight:'bold',
        // flex:1,
        // padding:10,
        textAlign:'center'
    },
    textwrapper: {
        flex:1,
        // padding: 10,
        textAlign:'left',
        flexWrap: 'wrap',
    },
    datewrapper:{
        flex:1,
    },
    date:{
        textAlign:'center'
    },
    checkboxwrapper:{
        flex:1,
        alignItems:'center',
    },
});  

export default ListOfReminders;