import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import api from '../../services/api';

export default function Obras({ navigation }) {

  const [cordeis, setCordeis] = useState([]);

  async function fetchData() {
    await api.get('/index').then(response => {
      setCordeis(response.data);
    });
  }

  useEffect(() => {
    fetchData();
  });


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxTitle}>
        <Image style={styles.titlePage} source={require('../../assets/Obras.png')} />
      </View>
      <ScrollView style={styles.scrollArea}>
        {cordeis.map(cordel => (
          <RectButton 
            onPress={() => {
              navigation.navigate('ObrasView', { cordel_id: cordel._id });
            }}
            style={styles.info}>
            <Text style={styles.infoText}>{cordel.Título}</Text>
          </RectButton>
        ))}
      </ScrollView>
      <Image style={styles.footerImage} source={require('../../assets/Image-2.png')} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F082DF',
    alignItems: 'center',
  },
  boxTitle: {
    alignItems: 'center',
    marginTop:'15%',
    marginBottom: '5%',
    backgroundColor: '#F082DF'
  },
  titlePage: {
    width: 300,
    height: 80,
    resizeMode: 'contain'
  },
  scrollArea: {
    width: '100%',
  },
  info: {
    backgroundColor: '#fff',
    width: '80%',
    height: 50,
    marginTop: '6%',
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 18,
  },
  footerImage: {
    width: 300,
    height: 150,
    resizeMode: 'contain'
  }
});