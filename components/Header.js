import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{ props.title }</Text>
    </View>
  );
}

Header.defaultProps = {
    title: "Reminder App"
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center'
  }
});

export default Header;