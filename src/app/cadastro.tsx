import { useState } from "react";
import { Alert, StyleSheet , Text, TextInput, TouchableOpacity, View } from "react-native";

import {router} from 'expo-router';

import api from '../api/api'
import { Aluno } from "@/types/aluno";

export default function Cadastro(){
    const [nome,setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function cadastrar() {
        if (
            nome.trim() === '' ||
            email.trim() === '' ||
            senha.trim() === ''
        ) {
            Alert.alert('Atenção', 'Preencha todos os campos')
            return
        }
        const aluno: Aluno = {
            nome: nome,
            idade: 0,
            email: email,
            telefone: '',
            turma: '',
            status: '',
            senha: senha
        }
        try {
            const response = await api.post('/aluno/cadastrar', aluno)
            Alert.alert('Resposta', response.data)

            if (response.data === 'Cadastro realizado') {
                router.push('/')
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro ao cadastrar aluno')
            console.log(error)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Criar Conta</Text>
            <Text style={styles.subtitulo}>Preencha os campos para criar sua conta</Text>

            <TextInput style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome} />

            <TextInput style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none" />

            <TextInput style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry />

            <TouchableOpacity style={styles.botao} onPress={cadastrar}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoSec}
                onPress={() => router.push('/')}>
                <Text style={styles.txtBotaoSec}>Já tenho conta</Text>
            </TouchableOpacity>
        </View>
    )       
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 32,
        color: '#666',
    },
    input: {
        backgroundColor: '#fff',
        padding: 14,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 16,
    },
    botao: {
        backgroundColor: '#222',
        padding: 15,
        borderRadius: 8,
        marginTop: 8,
    },
    textoBotao: {
        color: '#fff',  
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    botaoSec: {
        backgroundColor: '#ccc',
        padding: 15,
        borderRadius: 8,
        marginTop: 8,
    },
    txtBotaoSec: {
        color: '#222',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    }
})