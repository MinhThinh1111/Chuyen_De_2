import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [chuyenbay, setChuyenBay] = useState([])

  useEffect(() => {
    async function getAllChuyenBay() {
      try {
        const URI = 'http://localhost:8000';
        const chuyenbay = await axios.get(URI + 'api/chuyenbay/')
        console.log(chuyenbay.data)
        setChuyenBay(chuyenbay.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllChuyenBay()
  }, [])
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});