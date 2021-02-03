import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import api from '../../services/api';

export default function Obras({ navigation }) {

  const [cordeis, setCordeis] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    await api.get('/cordeis').then(response => {
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
        <Image style={styles.footerImage} source={require('../../assets/Image-2.png')} />
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
                navigation.navigate('ObrasInfo', { 
                  //ObrasInfo
                  cordel_transcrição: cordel.transcrição,
                  //Metadados
                  cordel_titulo: cordel.título,
                  cordel_descrição: cordel.descrição,
                  cordel_autor: cordel.autor,
                  cordel_tema: cordel.tema,
                  cordel_palavrasChave: cordel.palavrasChave,
                  cordel_numDeFolhas: cordel.númDeFolhas,
                  cordel_tecnicaDeRegistro: cordel.técnicaDeRegistro,
                  cordel_observacoes: cordel.observações,
                  cordel_codigoDeReferencia: cordel.códigoDeReferência,
                  cordel_unidadeDeArmanezamento: cordel.unidadeDeArmazenamento,
                  cordel_generoDocumental: cordel.gêneroDocumental,
                  cordel_especieDocumental: cordel.espécieDocumental,
                  cordel_suporte: cordel.suporte,
                  cordel_localidade: cordel.localidade,
                  cordel_data: cordel.data,
                  cordel_idioma: cordel.idioma,
                  cordel_cromia: cordel.cromia,
                  cordel_notasDePesquisa: cordel.notasDePesquisa,
                  cordel_tecnicasDeGravura: cordel.técnicasDeGravura
                });
              }}
              style={styles.info}
              key={cordel.título}
              >
              <Text style={styles.infoText}>{cordel.título}</Text>
            </RectButton>
          ))}
        <Image style={styles.footerImage} source={require('../../assets/Image-2.png')} />
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
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
    height: 150,
    marginLeft: 12,
    marginTop: 20,
  }
});