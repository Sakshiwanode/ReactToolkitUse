// src/components/CounterScreen.tsx
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/store';
import {increment, decrement, reset} from '../redux/slices/counterSlice';

const CounterScreen: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const [isDarkMode, setIsDarkMode] = useState(false); // Manage theme state

  // Toggle between dark and light themes
  const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

  // Styles based on the theme
  const themeStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <Text style={[styles.heading, themeStyles.text]}>Counter App:</Text>
      <Text style={[styles.counter, themeStyles.text]}>{counter}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: isDarkMode ? '#ffffff' : '#000'},
          ]}
          onPress={() => dispatch(increment())}>
          <Text style={{color: isDarkMode ? '#000' : '#fff'}}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: isDarkMode ? '#ffffff' : '#000'},
          ]}
          onPress={() => dispatch(decrement())}>
          <Text style={{color: isDarkMode ? '#000' : '#fff'}}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: isDarkMode ? '#ffffff' : '#000'},
          ]}
          onPress={() => dispatch(reset())}>
          <Text style={{color: isDarkMode ? '#000' : '#fff'}}>Reset</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.themeButton,
          {backgroundColor: isDarkMode ? '#ffffff' : '#000'},
        ]}
        onPress={toggleTheme}>
        <Text style={{color: isDarkMode ? '#000' : '#fff'}}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Base styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  counter: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginBottom: 20,
  },

  button: {
    flex: 1,
    padding: 9,
    marginHorizontal: 5,
    borderRadius: 6,
    alignItems: 'center',
  },
  themeButton: {
    padding: 10,
    marginVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
});

// Light theme styles
const lightTheme = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
});

// Dark theme styles
const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  text: {
    color: '#ffffff',
  },
});

export default CounterScreen;
