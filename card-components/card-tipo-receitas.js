import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CardTipoReceitas({
    imagem,
    imagem1,
    nome_prato,
    nome_prato1,
    rota,
    rota1
}) {
    const navigation = useNavigation();

    const style = StyleSheet.create({

        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 20
        },

        conteudo: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            gap: 10,
            width: 150,
            height: 180,
            marginBottom: 10
        },

        conteudo_img: {
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 8,
            overflow: 'hidden',
        },

        container_text: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        },

        texto: {
            fontSize: 16,
            padding: 5,
            color: '#FFFFFF',
            textAlign: 'center',
            maxWidth: 120,
            flexWrap: 'wrap',
        },

        img: {
            width: 100,
            height: 100
        }
    });

    return (
        <View style={style.container}>
            <TouchableOpacity
                style={style.conteudo}
                onPress={() => navigation.navigate(rota)}
            >
                <View style={style.conteudo_img}>
                    <Image style={style.img} source={imagem} />
                </View>
                <View style={style.container_text}>
                    <Text style={style.texto}>{nome_prato}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.conteudo}
                onPress={() => navigation.navigate(rota1)}
            >
                <View style={style.conteudo_img}>
                    <Image style={style.img} source={imagem1} />
                </View>
                <View style={style.container_text}>
                    <Text style={style.texto}>{nome_prato1}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
