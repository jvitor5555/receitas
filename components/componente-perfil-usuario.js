import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ComponentePerfilUsuario({ label, label1, textobotao}) {

    const styles = StyleSheet.create({

        container: {
            flex: 1,              
            padding: 20,          
            justifyContent: 'flex-start',  
            alignItems: 'center',      
            backgroundColor: '#fff',
            paddingTop: 40,
            borderWidth: 1,
            borderColor: '#000000',
            backgroundColor: '#142850'
        },

        conteudo: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
            marginTop: 50
        },

        conteudo_texto: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
        },

        texto_inicial: {
            fontSize: 18,
            color: '#FFFFFF',
            fontWeight:'bold'
            
        },

        container_texto_input: {
          
        },

        texto_input: {
            borderWidth: 1,
            borderColor: '#000000',
            borderRadius: 8,
            paddingLeft: 10,
            backgroundColor:"#FFFFFF"
        },

        texto: {
            paddingBottom: 5,
            color:'#FFFFFF'
        },

        container_botao: {
            display: 'flex',
            marginTop: 10
        },

        botao: {
            flexDirection: 'row', 
            alignItems: 'center',
            backgroundColor: '#1875FF',
            padding: 10,
            borderRadius: 8,
            justifyContent: 'center',
            gap: 5
        },
        
        icone: {
            
        },
        
        textoBotao: {
            color: '#fff',
            fontSize: 15,
            fontWeight: 'bold',
          },


    });

    return (
        
        <View style={styles.container}>

            <View style={styles.conteudo}>

                <View style={styles.conteudo_texto}>
                    <Text style={styles.texto_inicial}>PERFIL DO USUÁRIO</Text>
                </View>

                <View style={styles.container_texto_input}>
                    <Text style={styles.texto}>{label}</Text>
                    <TextInput placeholder="Ricardo Silva" style={styles.texto_input}/>
                </View>

                <View style={styles.container_texto_input}>
                    <Text style={styles.texto}>{label1}</Text>
                    <TextInput placeholder="ricardosilva@gmail.com" style={styles.texto_input}/>
                </View>

                <View style={styles.container_botao}>
                    <TouchableOpacity style={styles.botao} >
                        <FontAwesome name="star" size={24} color="gold" style={styles.icone} />
                        <Text style={styles.textoBotao}>{textobotao}</Text>
                    </TouchableOpacity>
                </View>


           </View>

        </View>
    );


}