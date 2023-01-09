import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import DateTimePicker from '@react-native-community/datetimepicker';

const AddItem = (props) => {
    const [item, setItem] = useState({
        text: "",
        date: new Date().toString(),
        completed: false  
    })
    const [showContent, setShowContent] = useState(false);

    const onTextChange = (textValue) => {                
        setItem({
          ...item,                               
          text: textValue
        });
      };
    
    const onDateTimeChange = (event, selectedDate) => { 
        const currentDate = selectedDate || date;
        setItem({
          ...item,                               
          date: currentDate.toString()
        });
    };

    const onPress = () => {
        props.addItem(item)
        if (!item.text) {
            setShowContent(false);
        } else {
            setShowContent(true)
        }
        setItem({
            text: '',                               
            date: new Date().toString(),
            completed: false
        });
        setTimeout(() => {
            setShowContent(false);
          }, 2000);    
    }
    
    return (
    <View style={styles.containerAddedItem}>
        { showContent ? 
        <View style={styles.textItemAdded}>
            <Text>Reminder added!</Text> 
        </View> : null
        }
        <TextInput style={styles.input} 
            onChangeText={onTextChange}  
            value={item.text} 
            placeholder="Enter reminder here..." 
        />
        <TouchableOpacity style={styles.dateTimePicker}>
            <DateTimePicker
                value={new Date(item.date)}
                mode={'datetime'}
                is24Hour={true}
                display="default"
                onChange={onDateTimeChange}
                minimumDate={new Date()}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} 
            onPress={onPress}>
            <Ionicons 
                name="add" 
                size={24} 
                color="#fff" 
            />        
            <Text styles={styles.btnText}>
                Add Reminder
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    containerAddedItem: {
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',
        marginTop: 60,
    },
    dateTimePicker: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        color: '#fff',
        borderRadius: 20, 
        marginBottom: 30,
    },
    btnText: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center'
    },
    textItemAdded: {
        width: '100%',
        padding: 5,
        position:'absolute',
        top:20,
        backgroundColor: '#eee',        
    }
});

export default AddItem;