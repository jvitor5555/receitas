import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Screens - Autenticação e Perfil
import Login from './screens/login';
import TrocaSenha from './screens/troca-senha';
import Cadastro from './screens/cadastro';
import PerfilUsuario from './screens/perfil-usuario';

// Screens - Menu e Tipos de Receitas
import MenuInicial from './screens/menu-inicial';
import TiposReceitas from './screens/tipos-receitas';

// Screens - Categorias Públicas
import CafeDaManha from './public/cafe-da-manha';
import Carnes from './public/carnes';
import Doces from './public/doces';
import FrutosDoMar from './public/frutos-do-mar';
import Grelhados from './public/grelhados';
import Intercionais from './public/internacional';
import Massas from './public/massas';
import ReceitasFavoritas from './public/receitas-favoritas';
import Saladas from './public/saladas';
import Salgados from './public/salgados';
import Sopas from './public/sopas-e-caldos';
import Unicos from './public/pratos-unicos';
import Vegetarianas from './public/vegetarianas-veganas';

// Screens - Detalhes (Privadas)
import DetalhesReceitaFavoritas from './private/detalhes-receitas-favoritas';
import DetalhesReceitaSalgadas from './private/detalhes-receitas-salgadas';
import DetalhesReceitasCafeDaManha from './private/detalhes-receitas-cafe-da-manha';
import DetalhesReceitasCarnes from './private/detalhes-receitas-carnes';
import DetalhesReceitasDoces from './private/detalhes-receitas-doces';
import DetalhesReceitasFrutosDoMar from './private/detalhes-receitas-frutos-do-mar';
import DetalhesReceitasGrelhados from './private/detalhes-receitas-grelhados';
import DetalhesReceitasInternacionais from './private/detalhes-receitas-internacionais';
import DetalhesReceitasMassas from './private/detalhes-receitas-massas';
import DetalhesReceitasPratosUnicos from './private/detalhes-receitas-pratos-unicos';
import DetalhesReceitasSaladas from './private/detalhes-receitas-saladas';
import DetalhesReceitasSopasCaldos from './private/detalhes-receitas-sopas-caldos';
import DetalhesReceitasVegetarianasVeganas from './private/detalhes-receitas-vegetarianas-veganas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* Autenticação e Perfil */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TrocaSenha" component={TrocaSenha} options={{ title: 'Esqueceu a senha' }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
          <Stack.Screen name="PerfilUsuario" component={PerfilUsuario} options={{ title: 'Perfil do Usuário' }} />

          {/* Menu e Tipos de Receitas */}
          <Stack.Screen name="MenuInicial" component={MenuInicial} options={{ title: 'Menu Inicial' }} />
          <Stack.Screen name="TiposReceitas" component={TiposReceitas} options={{ title: 'Tipos de Receitas' }} />

          {/* Categorias Públicas */}
          <Stack.Screen name="CafeDaManha" component={CafeDaManha} options={{ title: 'Café da Manhã' }} />
          <Stack.Screen name="Carnes" component={Carnes} options={{ title: 'Carnes' }} />
          <Stack.Screen name="Doces" component={Doces} options={{ title: 'Doces' }} />
          <Stack.Screen name="FrutosDoMar" component={FrutosDoMar} options={{ title: 'Frutos do Mar' }} />
          <Stack.Screen name="Grelhados" component={Grelhados} options={{ title: 'Grelhados' }} />
          <Stack.Screen name="Internacionais" component={Intercionais} options={{ title: 'Internacionais' }} />
          <Stack.Screen name="Massas" component={Massas} options={{ title: 'Massas' }} />
          <Stack.Screen name="ReceitasFavoritas" component={ReceitasFavoritas} options={{ title: 'Receitas Favoritas' }} />
          <Stack.Screen name="Saladas" component={Saladas} options={{ title: 'Saladas' }} />
          <Stack.Screen name="Salgados" component={Salgados} options={{ title: 'Salgados' }} />
          <Stack.Screen name="Sopas" component={Sopas} options={{ title: 'Sopas e Caldos' }} />
          <Stack.Screen name="Unicos" component={Unicos} options={{ title: 'Pratos Únicos' }} />
          <Stack.Screen name="Vegetarianas" component={Vegetarianas} options={{ title: 'Vegetarianas e Veganas' }} />

          {/* Detalhes */}
          <Stack.Screen name="DetalhesReceitasFavoritas" component={DetalhesReceitaFavoritas} options={{ title: 'Detalhes das Receitas Favoritas' }} />
          <Stack.Screen name="DetalhesReceitasSalgadas" component={DetalhesReceitaSalgadas} options={{ title: 'Detalhes das Receitas Salgadas' }} />
          <Stack.Screen name="DetalhesReceitasCafeDaManha" component={DetalhesReceitasCafeDaManha} options={{ title: 'Detalhes das Receitas Café da Manhã' }} />
          <Stack.Screen name="DetalhesReceitasCarnes" component={DetalhesReceitasCarnes} options={{ title: 'Detalhes das Receitas de Carnes' }} />
          <Stack.Screen name="DetalhesReceitasDoces" component={DetalhesReceitasDoces} options={{ title: 'Detalhes das Receitas Doces' }} />
          <Stack.Screen name="DetalhesReceitasFrutosDoMar" component={DetalhesReceitasFrutosDoMar} options={{ title: 'Detalhes das Receitas de Frutos do Mar' }} />
          <Stack.Screen name="DetalhesReceitasGrelhados" component={DetalhesReceitasGrelhados} options={{ title: 'Detalhes das Receitas de Grelhados' }} />
          <Stack.Screen name="DetalhesReceitasInternacionais" component={DetalhesReceitasInternacionais} options={{ title: 'Detalhes das Receitas Internacionais' }} />
          <Stack.Screen name="DetalhesReceitasMassas" component={DetalhesReceitasMassas} options={{ title: 'Detalhes das Receitas de Massas' }} />
          <Stack.Screen name="DetalhesReceitasPratosUnicos" component={DetalhesReceitasPratosUnicos} options={{ title: 'Detalhes dos Pratos Únicos' }} />
          <Stack.Screen name="DetalhesReceitasSaladas" component={DetalhesReceitasSaladas} options={{ title: 'Detalhes das Receitas de Saladas' }} />
          <Stack.Screen name="DetalhesReceitasSopasCaldos" component={DetalhesReceitasSopasCaldos} options={{ title: 'Detalhes das Sopas e Caldos' }} />
          <Stack.Screen name="DetalhesReceitasVegetarianasVeganas" component={DetalhesReceitasVegetarianasVeganas} options={{ title: 'Detalhes das Receitas Vegetarianas e Veganas' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
