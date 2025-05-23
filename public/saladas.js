import { StyleSheet, SafeAreaView, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CardReceita from '../card-components/card-receitas';
import { useNavigation } from '@react-navigation/native';

export default function Saladas() {

    const navigation = useNavigation();

    const abrirDetalhes = (id) => {
        navigation.navigate('DetalhesReceitasSaladas', { id: id });
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
                    <Text style={styles.texto}>Saladas</Text>
                </View>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(1)}>
                    <CardReceita
                        imagem={require('../assets/saladas/Salada Caprese.webp')}
                        nome_prato={'Salada Caprese'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(2)}>
                    <CardReceita
                        imagem={require('../assets/saladas/Salada Caesar.jpeg')}
                        nome_prato={'Salada Caesar'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(3)}>
                    <CardReceita
                        imagem={require('../assets/saladas/Salada de Quinoa com Abacate e Grão-de-Bico.jpg')}
                        nome_prato={'Salada de Quinoa com Abacate e Grão-de-Bico'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(4)}>
                    <CardReceita
                        imagem={require('../assets/saladas/Salada Grega.webp')}
                        nome_prato={'Salada Grega'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(5)}>
                    <CardReceita
                        imagem={require('../assets/saladas/Salada de Frutas Tropicais.webp')}
                        nome_prato={'Salada de Frutas Tropicais'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(6)}>
                    <CardReceita
                        imagem={require('../assets/saladas/Salada de Batata com Maionese.webp')}
                        nome_prato={'Salada de Batata com Maionese'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(7)}>
                    <CardReceita
                        imagem={require('../assets/saladas/Salada de Atum e Feijão Verde.jpg')}
                        nome_prato={'Salada de Atum e Feijão Verde'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(8)}>
                    <CardReceita
                        imagem={require('../assets/saladas/Salada de Abóbora Assada com Espinafre e Nozes.jpeg')}
                        nome_prato={'Salada de Abóbora Assada com Espinafre e Nozes'}
                    />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
