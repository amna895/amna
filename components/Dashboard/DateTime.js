import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../Background';
const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
  <Background>
    <View style={styles.container}>
      <Text style={styles.heading}>Current Date and Time</Text>
      <View style={styles.dateTimeContainer}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.dateTime}>{formattedDate}</Text>

        <Text style={styles.label}>Time:</Text>
        <Text style={styles.dateTime}>{formattedTime}</Text>
      </View>
    </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dateTimeContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateTime: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default DateTimeDisplay;
