import { StyleSheet, SafeAreaView, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CardReceita from '../card-components/card-receitas';
import { useNavigation } from '@react-navigation/native';

export default function Massas() {

    const navigation = useNavigation();

    const abrirDetalhes = (id) => {
        navigation.navigate('DetalhesReceitasMassas', { id: id });
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
                    <Text style={styles.texto}>Massas</Text>
                </View>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(1)}>
                    <CardReceita
                        imagem={require('../assets/massas/Canelone de Carne.webp')}
                        nome_prato={'Canelone de Carne'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(2)}>
                    <CardReceita
                        imagem={require('../assets/massas/Fettuccine-Alfredo-S.webp')}
                        nome_prato={'Fettuccine Alfredo'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(3)}>
                    <CardReceita
                        imagem={require('../assets/massas/Lasanha à Bolonhesa.jpeg')}
                        nome_prato={'Lasanha à Bolonhesa'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(4)}>
                    <CardReceita
                        imagem={require('../assets/massas/Macarrão com Camarão e Alho.jpeg')}
                        nome_prato={'Macarrão com Camarão e Alho'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(5)}>
                    <CardReceita
                        imagem={require('../assets/massas/Penne ao Pesto de Manjericão.jpeg')}
                        nome_prato={'Penne ao Pesto de Manjericão'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(6)}>
                    <CardReceita
                        imagem={require('../assets/massas/Ravioli de Ricota e Espinafre.jpg')}
                        nome_prato={'Ravioli de Ricota e Espinafre'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(7)}>
                    <CardReceita
                        imagem={require('../assets/massas/Spaghetti à Carbonara.jpg')}
                        nome_prato={'Spaghetti à Carbonara'}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.click} onPress={() => abrirDetalhes(8)}>
                    <CardReceita
                        imagem={require('../assets/massas/Tagliatelle com Molho de Cogumelos.jpeg')}
                        nome_prato={'Tagliatelle com Molho de Cogumelos'}
                    />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
