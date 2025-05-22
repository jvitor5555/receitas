import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        if (email === 'teste@email.com' && senha === '123456') {
            navigation.replace('PerfilUsuario'); // redireciona e remove o login da pilha
        } else {
            alert('E-mail ou senha inválidos');
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://www.estadao.com.br/resizer/v2/RD3ZD2DLZBBFPLNWYWACIMVYBE.jpeg?quality=80&auth=e8c3b735c9db1b8295524af652b2addfee589437d52d1eed722eb7b06849edec&width=1075&height=527&focal=3139,2028' }}
                style={styles.imagem}
            />

            <Text style={styles.title}>ENCONTRE AS MELHORES
            RECEITAS AQUI!!!</Text>

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={setSenha}
                value={senha}
                secureTextEntry
            />

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('MenuInicial')}>
                <Text style={styles.textoBotao}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.cadastro}>Cadastrar-se</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TrocaSenha')}>
                <Text style={styles.cadastro}>Esqueceu a senha?</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#142850',
    },
    imagem: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: 'white',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
    },
    cadastro: {
        marginTop: 20,
        fontSize: 16,
        color: '#007AFF',
        textDecorationLine: 'underline',
    },

    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1875FF',
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        gap: 5,
        width: '100%'
    },

    textoBotao: {
        color: '#FFFFFF'
    }
});
