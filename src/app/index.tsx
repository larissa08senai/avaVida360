import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import {router} from 'expo-router'

import api from '../api/api'
import type { Aluno } from '../types/aluno';

export default function Login(){

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function entrar() {
    if (email.trim()=== '' || senha.trim() === '') {
      Alert.alert('Atenção', 'Preecha email e senha')
      return
    }
    const aluno: Aluno ={
      nome: '',
      idade: 0,
      email : email,
      telefone: '',
      turma: '',
      status: '',
      senha : senha
    }

    try{
      const response = await api.post('/aluno/login' , aluno)

      Alert.alert('Resposta', response.data)

      if (response.data === 'Login realizado') {
        const responseALuno = await api.get('/aluno/logado')
        router.push({
          pathname: '/logado' as any, params: {
            nome: responseALuno.data.nome,
            email: responseALuno.data.email
          }
        })
      }
    }catch(error){
      Alert.alert('Erro', 'Não foi possível conectar com o servidor')
      console.log(error)
    }
  }

  return(
    <View style = {styles.container}>
      <Text style={styles.titulo}>Bem-Vindo</Text>

      <Text style={styles.subtitulo}> Faça login para continuar</Text>

      <TextInput style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none" />
      
      <TextInput style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry />
      
      <TouchableOpacity
        style={styles.botao}
        onPress={entrar} >
          <Text style={styles.txtBotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSec}
        onPress={() => router.push('/cadastro' as any)} >
          <Text style={styles.txtBotaoSec}>Criar conta</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#6b66d5'
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8
  },
  subtitulo:{
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    color: '#b97ad6'
  },
  input:{
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom:12,
    borderWidth: 1,
    borderColor: '#e4eeff'
  },
  botao: {
    backgroundColor: '#ceaadd',
    padding: 15,
    borderRadius: 8,
    marginTop: 8
  },
  txtBotao:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  botaoSec: {
    marginTop: 16
  },
  txtBotaoSec: {
    textAlign: 'center',
    fontSize: 15,
    color: '#222'
  },
})
