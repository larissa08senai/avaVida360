import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {router, useLocalSearchParams} from 'expo-router';

export default function Logado() {
    const {nome, email} = useLocalSearchParams()

    function sair() {
        router.replace('/')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Logado</Text>

            <View style={styles.card}>

                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.valor}>{nome}</Text>

                <Text style={styles.label}>E-mail:</Text>
                <Text style={styles.valor}>{email}</Text>
            </View>
            <TouchableOpacity style={styles.botao} onPress={sair}>
                <Text style={styles.txtBotao}>Sair</Text>
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
        marginBottom: 24,
    },
    card: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 24
    },
    label: {
        fontSize: 14,
        color: '#666',  
        marginBottom: 8
    },
    valor: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8
    },
    botao: {
        backgroundColor: '#222',
        padding: 15,
        borderRadius: 8,
    },
    txtBotao: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
