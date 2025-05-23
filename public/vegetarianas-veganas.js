import { StyleSheet, SafeAreaView, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CardReceita from '../card-components/card-receitas';
import { useNavigation } from '@react-navigation/native';

export default function Vegetarianas() {

    const navigation = useNavigation();

    const abrirDetalhes = (id) => {
        navigation.navigate('DetalhesReceitasVegetarianasVeganas', { id: id });
    };

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#142850',
            paddingTop: 60,
            paddingBottom: 80
        },
        texto_inicial: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 20
        },
        texto: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
            justifyContent: 'center'
        },
        click: {
            width: '100%',
            alignItems: 'center'
        }
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.texto_inicial}>
                    <Text style={styles.texto}>Vegetarianas e Veganas</Text>
                </View>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(1)}>
                    <CardReceita
                        imagem={require('../assets/vegetarianas-veganas/Feijão Tropeiro Vegano.jpg')}
                        nome_prato={'Feijão Tropeiro Vegano'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(2)}>
                    <CardReceita
                        imagem={require('../assets/vegetarianas-veganas/Lasanha de Berinjela.avif')}
                        nome_prato={'Lasanha de Berinjela'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(3)}>
                    <CardReceita
                        imagem={require('../assets/vegetarianas-veganas/Quibe Vegano de Abóbora e Grão-de-Bico.jpeg')}
                        nome_prato={'Quibe Vegano de Abóbora e Grão-de-Bico'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(4)}>
                    <CardReceita
                        imagem={require('../assets/vegetarianas-veganas/Curry de Legumes com Leite de Coco.webp')}
                        nome_prato={'Curry de Legumes com Leite de Coco'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(5)}>
                    <CardReceita
                        imagem={require('../assets/vegetarianas-veganas/Tacos Veganos com Feijão Preto.avif')}
                        nome_prato={'Tacos Veganos com Feijão Preto'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(6)}>
                    <CardReceita
                        imagem={require('../assets/vegetarianas-veganas/Salada de Grãos com Abacate e Molho Tahine.jpg')}
                        nome_prato={'Salada de Grãos com Abacate e Molho Tahine'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(7)}>
                    <CardReceita
                        imagem={require('../assets/vegetarianas-veganas/Hambúrguer Vegano de Lentilha.jpeg')}
                        nome_prato={'Hambúrguer Vegano de Lentilha'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(8)}>
                    <CardReceita
                        imagem={require('../assets/vegetarianas-veganas/Sopa de Abóbora e Coco.jpeg')}
                        nome_prato={'Sopa de Abóbora e Coco'}
                    />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
