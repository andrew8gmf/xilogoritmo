import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/Logo.png';

import api from '../../services/api';

export default function CreateObra() {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            } else {
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });
        
                console.log(result);
        
                if (!result.cancelled) {
                    setImage(result.uri);
                }  
            }
        }
    };
    
    const {navigate} = useNavigation();

    const [autor, onChangeAutor] = React.useState('');
    const [titulo, onChangeTitulo] = React.useState('');
    const [texto, onChangeTexto] = React.useState('');

    async function handleCreateSubmit() {
        if (!autor || !titulo || !texto) {
        alert("Preencha todos os dados!" );
        } else {
            try {
                await api.post("/create_cordel", { autor, titulo, texto });
                alert("Cordel criado com sucesso!");
                navigate('Landing');
            } catch (err) {
                console.log(err);
                alert("Ocorreu um erro na criação do cordel");
            }
        }
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
            <Image style={styles.logo} source={logoImg} />
            <View style={styles.uploadArea}>
                <RectButton 
                    onPress={pickImage}
                    style={styles.uploadButton} 
                >
                    <Feather name="upload" size={30} color="black"/>
                    <Text>Upload de imagem</Text>
                </RectButton>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    style={styles.input}
                    value={autor}
                    onChangeText={text => onChangeAutor(text)}
                    placeholder="Autor(a): "
                    placeholderTextColor="#c1bccc"
                />

                <TextInput
                    style={styles.input}
                    value={titulo}
                    onChangeText={text => onChangeTitulo(text)}
                    placeholder="Título:"
                    placeholderTextColor="#c1bccc"
                />

            </View>
            <TextInput
                style={styles.inputTextCordel}
                value={texto}
                onChangeText={text => onChangeTexto(text)}
                placeholder="Digite seu texto..."
                placeholderTextColor="#c1bccc"
                multiline
            />

            <RectButton
                onPress={handleCreateSubmit}
                style={styles.submitButtonText}
            >
                <Text style={styles.submitButton}>Criar Cordel</Text>
            </RectButton>

        </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0EC82'
    },
    scrollContainer: {
        flexGrow: 1
    },
    logo: {
        marginTop: '10%',
        marginBottom: '10%',
        width: 350,
        height: 50,
        resizeMode: 'contain',
        justifyContent: 'flex-end'
    },
    inputGroup: {
        marginTop: '10%',
        flexDirection: 'column',
        width: '80%'
    },
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginTop: 4,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputTextCordel: {
        height: 160,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingTop: 8,
        paddingBottom: 8,
        textAlignVertical: 'top',
        textAlign: 'justify',
        paddingHorizontal: 10,
        marginTop: 4,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    submitButtonText: {
        marginTop: 20,
        backgroundColor: '#F082DF',
        height: 56,
        width: 130,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    submitButton: {
        color: '#000',
        fontSize: 20,
        fontWeight: '800'
    },
    uploadArea: {
        alignItems: 'center', 
        justifyContent: 'center',
        width: '50%',
        height: '10%',
        padding: 10
    },
    uploadButton: {
        alignItems: 'center', 
        backgroundColor: 'white',
        width: '80%',
        height: '150%',
        padding: 10,
        borderRadius: 20
    },
})