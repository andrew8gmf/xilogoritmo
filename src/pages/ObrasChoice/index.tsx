import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ObrasChoice() {
    const { navigate } = useNavigation();

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.boxTitle}>
          <Image style={styles.titlePage} source={require('../../assets/Obras.png')} />
        </View>
        <View style={styles.infoArea}>
            <View style={styles.buttonsArea}>
                <RectButton 
                    style={styles.info}
                    onPress={() => { 
                      navigate('Obras');
                    }}>
                    <Text style={styles.infoText}>Originais</Text>
                </RectButton>    
                <RectButton 
                  style={styles.info}
                  onPress={() => { 
                    navigate('ObrasCreated');
                  }}>
                    <Text style={styles.infoText}>Comunidade</Text>
                </RectButton>
            </View>
        </View>
        <Image style={styles.footerImage} source={require('../../assets/Image-2.png')} />
        <StatusBar style="auto" />
      </SafeAreaView>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#92F390'
  },
  boxTitle: {
    alignItems: 'center',
    marginTop:'15%',
    marginBottom: '5%',
    backgroundColor: '#92F390'
  },
  titlePage: {
    width: 300,
    height: 80,
    resizeMode: 'contain'
  },
  infoArea: {
    width: '100%',
    height: '58%',
    justifyContent: "center"
  },
  buttonsArea: {
    display: "flex",
    flexDirection: "column",
    width: '100%',
    height: '50%',
    justifyContent: "space-between"
  },
  info: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    marginTop: '6%',
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoText: {
    fontSize: 18
  },
  footerImage: {
    width: 300,
    height: 150,
    resizeMode: 'contain'
  }
});