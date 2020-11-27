import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import api from '../../services/api';

export default function ObrasCreated({ navigation }) {

  const [cordeis, setCordeis] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    await api.get('/users_cordeis').then(response => {
      setCordeis(response.data);
      setLoading(false)
    });
  }

  useEffect(() => {
    fetchData();
  });

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.boxTitle}>
          <Image style={styles.titlePage} source={require('../../assets/Obras.png')} />
        </View>
        <ScrollView style={styles.scrollArea}>
          <View style={styles.loadArea}>
            <ActivityIndicator
              size="large"
              color="#000000"
            />
            <Text style={styles.loadText}>Aguarde, carregando os dados da aplicação ...</Text>
          </View>
        </ScrollView>
        <Image style={styles.footerImage} source={require('../../assets/cantadores.png')} />
        <StatusBar style="auto" />
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollArea}>
        <View style={styles.boxTitle}>
          <Image style={styles.titlePage} source={require('../../assets/Obras.png')} />
        </View>
          {cordeis.map(cordel => (
            <RectButton 
              onPress={() => {
                navigation.navigate('ObrasCreatedInfo', { 
                  //ObrasCreatedInfo
                  cordel_imageUrl: cordel.imageUrl,
                  cordel_titulo: cordel.titulo,
                  cordel_texto: cordel.texto,
                  //ObrasCreatedMetadata
                  cordel_autor: cordel.autor
                });
              }}
              style={styles.info}>
              <Text style={styles.infoText}>{cordel.titulo}</Text>
            </RectButton>
          ))}
          <Image style={styles.footerImage} source={require('../../assets/cantadores.png')} />
        </ScrollView>
        <StatusBar style="inverted" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9E90F3',
    alignItems: 'center',
  },
  boxTitle: {
    alignItems: 'center',
    marginTop:'15%',
    marginBottom: '5%',
    backgroundColor: '#9E90F3'
  },
  titlePage: {
    width: 300,
    height: 80,
    resizeMode: 'contain'
  },
  scrollArea: {
    width: '100%',
  },
  loadArea: {
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40%",
  },
  loadText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  info: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
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
    width: 350,
    height: 250,
    marginLeft: 10,
    marginTop: 10,
  }
});