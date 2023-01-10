import { styles as css } from './Style';
import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StatusBar, ImageBackground, Image, StyleSheet } from 'react-native';

export default function Register({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={{ uri: 'https://i.pinimg.com/736x/d2/0a/72/d20a726673f8d4cf81ea09926dba53c9.jpg' }}>
                <Image source={{ uri: 'https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454g', width: 60, height: 60 }} />
                <Text style={styles.title}>Cadastro</Text>
                <TextInput style={styles.input} placeholder="Insira seu Nome" placeholderTextColor="white" />
                <TextInput style={styles.input} placeholder="Insira seu E-mail" placeholderTextColor="white" />
                <TextInput style={styles.input} placeholder="Insira sua Senha" placeholderTextColor="white" />
                <TextInput style={styles.input} placeholder="Repita sua Senha" placeholderTextColor="white" />

                <View style={styles.group}>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={{ color: 'white' }} onPress={() => navigation.navigate('Login')}>Voltar para Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={{ color: 'white' }}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <StatusBar style="light"></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create(css);