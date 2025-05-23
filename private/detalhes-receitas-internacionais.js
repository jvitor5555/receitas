import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { receitasInternacionais } from '../data/dados-receitas-internacionais';//

export default function DetalhesReceitasInternacionais({ route }) { 
    const { id } = route.params;

    const receita = receitasInternacionais.find(item => item.id === Number(id));//

    if (!receita) {
        return (
            <View>
                <Text>Receita não encontrada.</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
            <ScrollView>
                <View style={styles.container_img}>
                    <Image source={receita.imagem} style={styles.img} />
                </View>
                <View style={styles.conteudo}>
                    <Text style={styles.titulo}>{receita.nome}</Text>
                    <Text style={styles.subtitulo}>Ingredientes:</Text>
                    {receita.ingredientes.map((item, index) => (
                        <Text style={styles.texto} key={index}>- {item}</Text>
                    ))}
                    <Text style={styles.subtitulo}>Modo de Preparo:</Text>
                    {receita.preparo.map((item, index) => (
                        <Text style={styles.texto} key={index}>{item}</Text>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#142850',
    },
    container_img: {
        marginBottom: 5,
    },
    img: {
        width: '100%',
        height: 200,
    },
    conteudo: {
        padding: 10,
    },
    titulo: {
        color: '#FFFFFF',
        fontSize: 22,
        marginBottom: 5,
    },
    subtitulo: {
        color: '#FFFFFF',
        marginTop: 20,
        marginBottom: 10,
        fontSize: 18,
    },
    texto: {
        color: '#FFFFFF',
        lineHeight: 25,
    },
});
