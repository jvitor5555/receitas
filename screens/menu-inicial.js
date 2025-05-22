import { View, StyleSheet } from 'react-native';
import ComponenteMenuInicial from '../components/componente-menu-inicial';

export default function MenuInicial({navigation}) {

    const styles = StyleSheet.create({

        container: {
            flex: 1
        }
    })

    return (

        <View style={styles.container}>
            <ComponenteMenuInicial
                imagem={require('../assets/image/logo-usuario.jpg')}
                texto={'Perfil do usuário'}
                imagem1={require('../assets/image/panela.jpeg')}
                texto1={'Tipos de Receitas'}
                rota={'PerfilUsuario'}
                rota1={'TiposReceitas'}
                navigation={navigation}
            />
        </View>
    );
}
