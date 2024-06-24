// Importa bibliotecas e componentes necessários do React e React Native
import React, { useState } from "react"; // Importa React e o hook useState
import { View, StyleSheet, FlatList, Text } from "react-native"; // Importa componentes de layout e estilização do React Native

import Pessoa from "./src/Pessoa"; // Importa o componente Pessoa da pasta src

// Componente principal da aplicação
export default function App() {
  // Declara um estado chamado feed, com dados de exemplo sobre pessoas
  const [feed, setFeed] = useState([
    { id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' },
    { id: '2', nome: 'Lucas', idade: 23, email: 'lucas@lucas.com' },
    { id: '3', nome: 'Luan', idade: 20, email: 'luan@luan.com' },
    { id: '4', nome: 'Herberton', idade: 30, email: 'herberton@herberton.com' },
    { id: '5', nome: 'Rafael', idade: 40, email: 'rafael@rafael.com' },
    { id: '6', nome: 'Luiz', idade: 35, email: 'luiz@luiz.com' }
  ]);

  // Retorna o layout da aplicação
  return (
    
    // Contêiner principal 
    <View style={styles.container}> 

      <FlatList
        showsVerticalScrollIndicator={false} // Oculta a barra de rolagem vertical
        data={feed} // Dados a serem exibidos na lista
        renderItem={({ item }) => <Pessoa data={item} />} // Renderiza cada item usando o componente Pessoa
      />

    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível na tela
  },
});
