import { StyleSheet, SafeAreaView, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CardReceita from '../card-components/card-receitas';
import { useNavigation } from '@react-navigation/native';

export default function Unicos() {

    const navigation = useNavigation();

    const abrirDetalhes = (id) => {
        navigation.navigate('DetalhesReceitasPratosUnicos', { id: id });
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
            fontSize: 24
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
                    <Text style={styles.texto}>Salgados</Text>
                </View>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(1)}>
                    <CardReceita
                        imagem={require('../assets/pratos-unicos/Arroz de Peixe com Legumes.jpg')}
                        nome_prato={'Arroz de Peixe com Legumes'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(2)}>
                    <CardReceita
                        imagem={require('../assets/pratos-unicos/Paella de Frutos do Mar.webp')}
                        nome_prato={'Paella de Frutos do Mar'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(3)}>
                    <CardReceita
                        imagem={require('../assets/pratos-unicos/Bowl de Quinoa com Frango e Abacate.avif')}
                        nome_prato={'Bowl de Quinoa com Frango e Abacate'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(4)}>
                    <CardReceita
                        imagem={require('../assets/pratos-unicos/Risoto de Cogumelos e Queijo Brie.webp')}
                        nome_prato={'Risoto de Cogumelos e Queijo Brie'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(5)}>
                    <CardReceita
                        imagem={require('../assets/pratos-unicos/Bowl Mediterrâneo com Grão-de-Bico.jpeg')}
                        nome_prato={'Bowl Mediterrâneo com Grão-de-Bico'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(6)}>
                    <CardReceita
                        imagem={require('../assets/pratos-unicos/Chili com Carne e Arroz.avif')}
                        nome_prato={'Chili com Carne e Arroz'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(7)}>
                    <CardReceita
                        imagem={require('../assets/pratos-unicos/Curry de Frango com Arroz Jasmin.webp')}
                        nome_prato={'Curry de Frango com Arroz Jasmin'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(8)}>
                    <CardReceita
                        imagem={require('../assets/pratos-unicos/Risoto de Cogumelos e Queijo Brie.webp')}
                        nome_prato={'Risoto de Cogumelos e Queijo Brie'}
                    />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
