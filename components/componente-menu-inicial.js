import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ComponenteMenuInicial({ texto, texto1, imagem, imagem1, rota, rota1, navigation }) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
            backgroundColor: '#142850'
        },
        conteudo: {
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center'
        },
        container_img: {
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#000000',
            width: 150,
            height: 150,
            overflow: 'hidden',
            borderRadius: 75
        },
        img: {
            width: '100%',
            height: '100%',
        },
        texto: {
            fontSize: 20,
            color: '#FFFFFF',
            padding: 5,
            marginTop: 10
        }
    });

    return (
        <View style={styles.container}>

            <View style={styles.conteudo}>
                <TouchableOpacity onPress={() => navigation.navigate(rota)}>
                    <View style={styles.container_img}>
                        <Image source={imagem} style={styles.img} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.texto}>{texto}</Text>
            </View>

            <View style={styles.conteudo}>
                <TouchableOpacity onPress={() => navigation.navigate(rota1)}>
                    <View style={styles.container_img}>
                        <Image source={imagem1} style={styles.img} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.texto}>{texto1}</Text>
            </View>

        </View>
    );
}
