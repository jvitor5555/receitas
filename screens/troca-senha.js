import { View, StyleSheet } from "react-native";
import React from "react-native";

import ComponenteTrocaSenha from "../components/componente-troca-senha";

export default function TrocaSenha() {

    const styles = StyleSheet.create({

        container: {
            flex: 1
        },
    });
    
    return (
        
        <View style={styles.container}>
            <ComponenteTrocaSenha
                textobotao={'ENVIAR SENHA'}
            />
        </View>
    )
}