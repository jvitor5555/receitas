import { StyleSheet, Text, View, Image } from 'react-native';

export default function CardReceitas({ imagem, nome_prato }) {

    const style = StyleSheet.create({
        container: {
            width: '90%',
            marginBottom: 15,
            backgroundColor: '#27496d',
            borderRadius: 10,
            padding: 10,
            elevation: 5, // sombra no Android
            shadowColor: '#000', // sombra no iOS
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
        },

        conteudo: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        conteudo_img: {
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 8,
            overflow: 'hidden',
            width: 100,
            height: 100,
            backgroundColor: '#fff'
        },

        container_text: {
            flex: 1,
            justifyContent: 'center',
            marginLeft: 20
        },

        texto: {
            fontSize: 20,
            color: '#FFFFFF',
            fontWeight: 'bold',
        },

        img: {
            width: '100%',
            height: '100%',
            resizeMode: 'cover'
        }
    });

    return (
        <View style={style.container}>
            <View style={style.conteudo}>
                <View style={style.conteudo_img}>
                    <Image style={style.img} source={imagem} />
                </View>

                <View style={style.container_text}>
                    <Text style={style.texto}>{nome_prato}</Text>
                </View>
            </View>
        </View>
    );
}
