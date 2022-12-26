import React, {useState} from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';
import uuid from 'react-native-uuid';

const CreateReminderScreen = ({navigation, route}) => {
    const [items, setItems] = useState([])

    const addItem = (item) => {
      if (!item.text) {
        alert("Please enter text")
      }
      else {
        try {
          setItems(prevItems => {
            return [{id: uuid.v4(), text:item.text, date:item.date}, ...prevItems];
          })
        }
        catch {
          alert("oops something went wrong")
        }
      }
    }
  
    const deleteItem = id => {
      setItems(prevItems => {
        return prevItems.filter(item => item.id != id)
      });
    }
    
    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        // console.groupCollapsed('dismissed keyboard');
      }}>

      <View style={styles.container}>
        <View style={styles.additem}>
          <AddItem 
            addItem={addItem} />
        </View>
        <View style={styles.flatlist}>
          <FlatList 
            data={items} 
            renderItem={({item}) => (
              <ListItem 
                item={item} 
                deleteItem={deleteItem} 
              />
            )}
          />
        </View>
        <View style={styles.allReminders}>
          <TouchableOpacity style={styles.btnAllReminders} 
              onPress={() => {
                navigation.navigate('ListOfRemindersScreen', {title:'View all Reminders', data: items});
              }
                } >
                <Text styles={styles.btnTextAllReminders}>
                    View All Reminders
                </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addItem:{
  },
  flatlist:{
    flex:1,
  },
  allReminders:{
    flex:1,
    alignItems:'center'
  },
  btnAllReminders: {
    backgroundColor: 'orange',
    padding: 15,
    margin: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    width:"80%",
    color: 'white',
    borderRadius: 20,
  },
  btnTextAllReminders: {
    fontSize: 24,
    color: '#fff',
  },
});

export default CreateReminderScreen;