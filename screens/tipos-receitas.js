import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native';
import CardTipoReceita from '../card-components/card-tipo-receitas';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TiposReceitas() {

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#142850',
            paddingTop: 20,
            paddingBottom: 20
        },
        texto_inicial: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 20
        },
        icone: {

        },
        texto: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10
        }
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#142850' }} edges={['top']}>

            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.texto_inicial}>
                    <Text style={styles.texto}>TIPOS DE RECEITAS</Text>
                </View>
                <CardTipoReceita
                    imagem={require('../assets/apresentacao/salgados.jpg')}
                    nome_prato={'Salgados'}
                    rota={'Salgados'}
                    imagem1={require('../assets/apresentacao/doces.jpg')}
                    nome_prato1={'Doces'}
                    rota1={'Doces'}
                />
                <CardTipoReceita
                    imagem={require('../assets/apresentacao/massas.jpg')}
                    nome_prato={'Massas'}
                    rota={'Massas'}
                    imagem1={require('../assets/apresentacao/carnes.jpg')}
                    nome_prato1={'Carnes'}
                    rota1={'Carnes'}
                />
                <CardTipoReceita
                    imagem={require('../assets/apresentacao/saladas.jpg')}
                    nome_prato={'Saladas'}
                    rota={'Saladas'}
                    imagem1={require('../assets/apresentacao/pratos_unicos.jpg')}
                    nome_prato1={'Únicas'}
                    rota1={'Unicos'}
                />
                <CardTipoReceita
                    imagem={require('../assets/apresentacao/sopas_caldos.jpg')}
                    nome_prato={'Sopas'}
                    rota={'Sopas'}
                    imagem1={require('../assets/apresentacao/vegetarianas.jpg')}
                    nome_prato1={'Vegetarianas'}
                    rota1={'Vegetarianas'}
                />
                <CardTipoReceita
                    imagem={require('../assets/apresentacao/frutos_do_mar.jpg')}
                    nome_prato={'Frutos do Mar'}
                    rota={'FrutosDoMar'}
                    imagem1={require('../assets/apresentacao/grelhados.jpg')}
                    nome_prato1={'Grelhados'}
                    rota1={'Grelhados'}
                />
                <CardTipoReceita
                    imagem={require('../assets/apresentacao/comida_internacional.jpg')}
                    nome_prato={'Internacionais'}
                    rota={'Internacionais'}
                    imagem1={require('../assets/apresentacao/cafe_da_manha.jpg')}
                    nome_prato1={'Matinais'}
                    rota1={'CafeDaManha'}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
