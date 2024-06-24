// Importa bibliotecas e componentes necessários do React e React Native
import React from "react";
import { View, StyleSheet, Text } from 'react-native';

// Define o componente Pessoa que recebe props
function Pessoa(props) {
  return (
    // Contêiner para cada pessoa
    <View style={styles.areaPessoa}>
      {/* Exibe o nome da pessoa */}
      <Text style={styles.textoPessoa}>{props.data.nome}</Text>
      {/* Exibe a idade da pessoa */}
      <Text style={styles.textoPessoa}>{props.data.idade} anos</Text>
      {/* Exibe o email da pessoa */}
      <Text style={styles.textoPessoa}>{props.data.email}</Text>
    </View>
  );
}

// Define os estilos para o componente Pessoa
const styles = StyleSheet.create({
  // Estilo para o contêiner da pessoa
  areaPessoa: {
    backgroundColor: '#123123', // Cor de fundo
    height: 200, // Altura fixa
    marginBottom: 15, // Espaço inferior
    justifyContent: 'center' // Centraliza os itens verticalmente
  },
  // Estilo para o texto da pessoa
  textoPessoa: {
    color: '#fff', // Cor do texto
    fontSize: 20 // Tamanho da fonte
  }
});

// Exporta o componente Pessoa como padrão
export default Pessoa;
