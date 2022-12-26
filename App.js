import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Homescreen';
import CreateReminderScreen from './screens/CreateReminderScreen';
import ListOfRemindersScreen from './screens/ListOfRemindersScreen';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
          initialParams={{items: []}}
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
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default App;