import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import logoImg from '../../assets/Logo.png';


export default function CreateObra() {

    function handleCreateSubmit() {

    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logoImg} />
            <View style={styles.inputGroup}>
                <TextInput
                    style={styles.input}
                    // value={week_day}
                    // onChangeText={text => setWeekDay(text)}
                    placeholder="Autor(a): "
                    placeholderTextColor="#c1bccc"
                />

                <TextInput
                    style={styles.input}
                    // value={week_day}
                    // onChangeText={text => setWeekDay(text)}
                    placeholder="Título:"
                    placeholderTextColor="#c1bccc"
                />

            </View>
            <TextInput
                style={styles.inputTextCordel}
                // value={week_day}
                // onChangeText={text => setWeekDay(text)}
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0EC82'
    },
    logo: {
        width: 350,
        height: 50,
        resizeMode: 'contain',
        justifyContent: 'flex-end'
    },
    inputGroup: {
        marginTop: '30%',
        flexDirection: 'column',
        width: '80%'
    },
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
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
        textAlignVertical: 'top',
        textAlign: 'justify',
        paddingHorizontal: 16,
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
        borderRadius: 20,
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
        color: '#fff',
        fontSize: 20,
        fontWeight: '800'
    }

})
