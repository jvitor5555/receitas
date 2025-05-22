import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Login from './screens/login';
import TrocaSenha from './screens/troca-senha';
import Cadastro from './screens/cadastro';
import PerfilUsuario from './screens/perfil-usuario';
import TiposReceitas from './screens/tipos-receitas';
import MenuInicial from './screens/menu-inicial';
import Salgados from './public/salgados';
import ReceitasFavoritas from './public/receitas-favoritas';
import DetalhesReceitaSalgadas from './private/detalhes-receitas-salgadas';
import DetalhesReceitaFavoritas from './private/detalhes-receitas-favoritas';
import DetalhesReceitasCafeDaManha from './private/detalhes-receitas-cafe-da-manha';
import CafeDaManha from './public/cafe-da-manha';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TrocaSenha" component={TrocaSenha} options={{ title: 'Esqueceu a senha' }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
          <Stack.Screen name="PerfilUsuario" component={PerfilUsuario} options={{ title: 'Perfil do usuário' }} />
          <Stack.Screen name="TiposReceitas" component={TiposReceitas} options={{ title: 'Tipo de Receitas' }} />
          <Stack.Screen name="MenuInicial" component={MenuInicial} options={{ title: 'Menu Inicial' }} />
          <Stack.Screen name="Salgados" component={Salgados} options={{ title: 'Salgados' }} />
          <Stack.Screen name="DetalhesReceitaSalgadas" component={DetalhesReceitaSalgadas} options={{ title: 'Detalhes das Receitas Salgadas' }} />
          <Stack.Screen name="ReceitasFavoritas" component={ReceitasFavoritas} options={{ title: 'Receitas Favoritas' }} />
          <Stack.Screen name="DetalhesReceitasFavoritas" component={DetalhesReceitaFavoritas} options={{ title: 'Detalhes das Receitas Favoritas' }} />
          <Stack.Screen name="DetalhesReceitasCafeDaManha" component={DetalhesReceitasCafeDaManha} options={{ title: 'Detalhes das Receitas Café da Manhã' }} />
          <Stack.Screen name="CafeDaManha" component={CafeDaManha} options={{ title: 'Café Da Manhã' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
