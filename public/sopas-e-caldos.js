import { StyleSheet, SafeAreaView, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CardReceita from '../card-components/card-receitas';
import { useNavigation } from '@react-navigation/native';

export default function Sopas() {

    const navigation = useNavigation();

    const abrirDetalhes = (id) => {
        navigation.navigate('DetalhesReceitasSopasCaldos', { id: id });
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
                    <Text style={styles.texto}>Sopas e Caldos</Text>
                </View>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(1)}>
                    <CardReceita
                        imagem={require('../assets/sopas-caldos/Sopa de Abóbora com Gengibre.jpg')}
                        nome_prato={'Sopa de Abóbora com Gengibre'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(2)}>
                    <CardReceita
                        imagem={require('../assets/sopas-caldos/Caldo Verde.webp')}
                        nome_prato={'Caldo Verde'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(3)}>
                    <CardReceita
                        imagem={require('../assets/sopas-caldos/Sopa de Frango com Legumes.jpg')}
                        nome_prato={'Sopa de Frango com Legumes'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(4)}>
                    <CardReceita
                        imagem={require('../assets/sopas-caldos/Sopa de Cebola Gratinada.webp')}
                        nome_prato={'Sopa de Cebola Gratinada'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(5)}>
                    <CardReceita
                        imagem={require('../assets/sopas-caldos/Sopa de Lentilhas.jpg')}
                        nome_prato={'Sopa de Lentilhas'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(6)}>
                    <CardReceita
                        imagem={require('../assets/sopas-caldos/Caldo de Peixe com Legumes.webp')}
                        nome_prato={'Caldo de Peixe com Legumes'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(7)}>
                    <CardReceita
                        imagem={require('../assets/sopas-caldos/Sopa de Tomate com Manjericão.webp')}
                        nome_prato={'Sopa de Tomate com Manjericão'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(8)}>
                    <CardReceita
                        imagem={require('../assets/sopas-caldos/Sopa de Milho Verde com Bacon.webp')}
                        nome_prato={'Sopa de Milho Verde com Bacon'}
                    />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

