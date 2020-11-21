import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function ObrasInfo({ route, navigation }) {
  const { 
    cordel_transcrição,
    cordel_titulo,
    cordel_descrição,
    cordel_autor,
    cordel_tema,
    cordel_palavrasChave,
    cordel_numDeFolhas,
    cordel_tecnicaDeRegistro,
    cordel_observacoes,
    cordel_codigoDeReferencia,
    cordel_unidadeDeArmanezamento,
    cordel_generoDocumental,
    cordel_especieDocumental,
    cordel_suporte,
    cordel_localidade,
    cordel_data,
    cordel_idioma,
    cordel_cromia,
    cordel_notasDePesquisa,
    cordel_tecnicasDeGravura,
  } = route.params;

  const { navigate } = useNavigation();

  function handleNavigateToBack() {
    navigate('Obras')
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lineTop}>
        <RectButton
          onPress={handleNavigateToBack}
          style={styles.buttonNavigation}
        >
          <Feather name="arrow-left" size={50} color="black" />
        </RectButton>
        <RectButton
          onPress={() => {
            navigation.navigate('Metadata', {
              cordel_titulo,
              cordel_descrição,
              cordel_autor,
              cordel_tema,
              cordel_palavrasChave,
              cordel_numDeFolhas,
              cordel_tecnicaDeRegistro,
              cordel_observacoes,
              cordel_codigoDeReferencia,
              cordel_unidadeDeArmanezamento,
              cordel_generoDocumental,
              cordel_especieDocumental,
              cordel_suporte,
              cordel_localidade,
              cordel_data,
              cordel_idioma,
              cordel_cromia,
              cordel_notasDePesquisa,
              cordel_tecnicasDeGravura,
            });
          }}
          style={styles.buttonMetadados}>
          <Text style={styles.metadadosTitle}>METADADOS</Text>
        </RectButton>
      </View>

      <View style={styles.boxTitle}>
        <ScrollView horizontal>
          <Text style={styles.titlePage}>{cordel_titulo}</Text>
        </ScrollView>
      </View>

      <View style={styles.info}>
        <ScrollView>
          <Image style={styles.infoImage} source={require('../../assets/Image-Solid.png')} />
          <Text style={styles.infoText}>
            {cordel_transcrição}
          </Text>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82AEF0',
    alignItems: 'center',
  },
  lineTop: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    paddingRight: "10%",
    justifyContent: "space-between"
  },
  buttonNavigation: {
    backgroundColor: '#fff',
    borderRadius: 100,
    marginTop: 40,
    marginLeft: 10,
    padding: 0,
  },
  buttonMetadados: {
    backgroundColor: '#fff',
    marginTop: 40,
    alignSelf: "center",
    justifyContent: "center",
    padding: "2%",
    borderRadius: 10
  },
  metadadosTitle: {
    fontSize: 18
  },
  boxTitle: {
    alignItems: 'center',
    marginTop: '25%',
    width: '70%',
    paddingVertical: '5%',
    height: '10%',
    position: "relative"
  },
  titlePage: {
    fontSize: 24,
    fontWeight: "600",
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    paddingVertical: '2%'
  },
  info: {
    backgroundColor: '#fff',
    width: '80%',
    height: '70%',
    overflow: "hidden",
    marginTop: '2%',
    marginBottom: '20%',
    borderRadius: 8,
    alignItems: 'center',
    padding: '2%'
  },
  infoImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%'
  },
  infoText: {
    fontSize: 18,
  }

});