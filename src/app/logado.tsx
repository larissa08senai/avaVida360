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
        backgroundColor: '#e67ce8'
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    card: {
        backgroundColor: '#e9a6dd',
        padding: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 24
    },
    label: {
        fontSize: 14,
        color: '#aa52e5',  
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
