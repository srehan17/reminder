import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Homescreen';
import CreateReminderScreen from './screens/CreateReminderScreen';
import ListOfRemindersScreen from './screens/ListOfRemindersScreen';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export const RemindersContext = React.createContext({
  reminders: [],
  setReminders: ()=>{}
});

const App = () => {
  const [reminders, setReminders] = useState([]);
  const value = {reminders, setReminders };

  return (
    <RemindersContext.Provider value={value} >
      <NavigationContainer style={styles.container}>
          <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerTitleAlign: 'center'}} >
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ 
                title: 'Welcome to the Reminder App', 
                headerStyle:{ backgroundColor: 'darkslateblue'}, 
                headerTitleStyle:{color:'#fff', fontWeight:'bold', fontSize: 20}
              }}
              // initialParams={{items: []}}
            />
            <Stack.Screen
              name="CreateReminderScreen" 
              options={{ 
                title: 'Create Reminder', 
                headerStyle:{backgroundColor: 'darkslateblue'},
                headerTitleStyle:{color:'#fff', fontWeight:'bold', fontSize: 20}
              }}
              component={CreateReminderScreen} 
            />
            <Stack.Screen 
              name="ListOfRemindersScreen"
              options={{ 
                title: 'List of Reminders', 
                headerStyle:{backgroundColor: 'darkslateblue'},
                headerTitleStyle:{color:'#fff', fontWeight:'bold', fontSize: 20}
              }}
              component={ListOfRemindersScreen} 
            />
          </Stack.Navigator>    
        </NavigationContainer>
    </RemindersContext.Provider>
 
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default App;