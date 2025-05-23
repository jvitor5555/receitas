import { StyleSheet, SafeAreaView, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CardReceita from '../card-components/card-receitas';
import { useNavigation } from '@react-navigation/native';

export default function FrutosDoMar() {

    const navigation = useNavigation();

    const abrirDetalhes = (id) => {
        navigation.navigate('DetalhesReceitasFrutosDoMar', { id: id });
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
                    <Text style={styles.texto}>Frutos do Mar</Text>
                </View>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(1)}>
                    <CardReceita
                        imagem={require('../assets/frutos-do-mar/arroz-com-marisco.jpg')}
                        nome_prato={'Arroz com Marisco'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(2)}>
                    <CardReceita
                        imagem={require('../assets/frutos-do-mar/camarao-empanado.jpg')}
                        nome_prato={'Camarão Empanado'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(3)}>
                    <CardReceita
                        imagem={require('../assets/frutos-do-mar/ceviche.jpeg')}
                        nome_prato={'Ceviche'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(4)}>
                    <CardReceita
                        imagem={require('../assets/frutos-do-mar/espaguete-camarao.jpg')}
                        nome_prato={'Espaguete com Camarão'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(5)}>
                    <CardReceita
                        imagem={require('../assets/frutos-do-mar/moqueca-camarao.jpg')}
                        nome_prato={'Moqueca de Camarão'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(6)}>
                    <CardReceita
                        imagem={require('../assets/frutos-do-mar/risoto-camarao.jpeg')}
                        nome_prato={'Risoto de Camarão'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(7)}>
                    <CardReceita
                        imagem={require('../assets/frutos-do-mar/robalo.jpg')}
                        nome_prato={'Robalo Grelhado'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(8)}>
                    <CardReceita
                        imagem={require('../assets/frutos-do-mar/Tartare.jpeg')}
                        nome_prato={'Tartare de Salmão'}
                    />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
