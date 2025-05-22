import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardReceita from '../card-components/card-receitas';
import { useNavigation } from '@react-navigation/native';

export default function ReceitasFavoritas() {

    const navigation = useNavigation();

    const abrirDetalhes = (id) => {
        navigation.navigate('DetalhesReceitasFavoritas', { id: id });
    };

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#142850',
            paddingTop: 20,
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
            fontSize: 18,
            fontWeight: 'bold'
        },

        touch: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#142850' }} edges={['top']}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.texto_inicial}>
                    <FontAwesome name="star" size={24} color="gold" />
                    <Text style={styles.texto}>RECEITAS FAVORITAS</Text>
                </View>

                <TouchableOpacity style={styles.touch} onPress={() => abrirDetalhes(1)}>
                    <CardReceita
                        imagem={require('../assets/favoritas/bolo-de-abacaxi.jpeg')}
                        nome_prato={'Bolo de Abacaxi'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch} onPress={() => abrirDetalhes(2)}>
                    <CardReceita
                        imagem={require('../assets/favoritas/bolo-de-cenoura.jpg')}
                        nome_prato={'Bolo de Cenoura'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch} onPress={() => abrirDetalhes(3)}>
                    <CardReceita
                        imagem={require('../assets/favoritas/brownie.jpg')}
                        nome_prato={'Brownie'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch} onPress={() => abrirDetalhes(4)}>
                    <CardReceita
                        imagem={require('../assets/favoritas/churros.jpg')}
                        nome_prato={'Churros'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch} onPress={() => abrirDetalhes(5)}>
                    <CardReceita
                        imagem={require('../assets/favoritas/espaguete.jpg')}
                        nome_prato={'Espaguete'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch} onPress={() => abrirDetalhes(6)}>
                    <CardReceita
                        imagem={require('../assets/favoritas/lasanha.jpg')}
                        nome_prato={'Lasanha'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch} onPress={() => abrirDetalhes(7)}>
                    <CardReceita
                        imagem={require('../assets/favoritas/estrogonofe.jpg')}
                        nome_prato={'Estrogonofe'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch} onPress={() => abrirDetalhes(8)}>
                    <CardReceita
                        imagem={require('../assets/favoritas/carne-de-panela.jpg')}
                        nome_prato={'Carne de Panela'}
                    />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
