import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function ObrasCreatedMetadata({ route, navigation }) {
  const { 
    cordel_titulo,
    cordel_autor,
    cordel_texto
  } = route.params;

  const { navigate } = useNavigation();

  function handleNavigateToBack(){
    navigate('ObrasCreatedInfo')
  }

  return (
    <SafeAreaView style={styles.container}>
      <RectButton
        onPress={handleNavigateToBack}
        style={styles.buttonNavigation}
      >
        <Feather name="arrow-left" size={50} color="black" />
      </RectButton>
      <View style={styles.boxTitle}>
        <Text style={styles.titlePage}>METADADOS</Text>
        <View style={styles.line}></View>
      </View>
      <ScrollView>
        <View style={styles.boxContent}>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Autor:</Text>
            <Text style={styles.infoData}> {cordel_autor} </Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Título:</Text>
            <Text style={styles.infoData}> {cordel_titulo} </Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Título:</Text>
            <Text style={styles.infoData}> {cordel_texto} </Text>
            <View style={styles.lineData}></View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3B490',

  },
  buttonNavigation:{
    backgroundColor: '#fff',
    borderRadius: 100, 
    marginTop:40,
    marginLeft: 10,
    padding:0,
    alignItems: "center",
    justifyContent: 'flex-start',
    position: "absolute",
  },
  boxTitle: {
    alignItems: 'center',
    marginTop: '20%'
  },
  titlePage: {
    fontSize: 24,
    fontWeight: "600",
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10

  },
  line: {
    backgroundColor: '#000',
    height: '5%',
    width: '90%'
  },
  boxContent: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    // Aparece todos os cards corretamente
    paddingBottom: '100%',

    marginHorizontal: '10%',
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    shadowColor: "#707070",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  infoCard: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: "flex-start",
    justifyContent: 'flex-start',
    padding: 8,
    // backgroundColor: '#707070'
  },
  titleInfo: {
    marginTop: 0,
    fontSize: 18,
    fontWeight: "700"
  },
  infoData: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "400"
  },
  lineData: {
    marginTop: 15,
    marginBottom: 0,

    backgroundColor: '#000',
    height: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});