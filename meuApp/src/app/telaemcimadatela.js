import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Detalhes() {
  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>

      <Stack.Screen
        options={{
          title: "Tela em cima da Tela 2",
        }}
      />

      <View style={styles.caixa}>

        <Text style={styles.titulo}>
          Tela de Detalhes
        </Text>

        <Text style={styles.texto}>
          Agora esta tela está por cima da Tela 2.
        </Text>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  tela: {
    flex: 1,
    backgroundColor: "#111111",
    padding: 20,
    paddingTop: 20,
  },

  caixa: {
    backgroundColor: "#1e1e1e",
    padding: 25,
    borderRadius: 15,
  },

  titulo: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
  },

  texto: {
    color: "#aaaaaa",
    fontSize: 16,
    marginTop: 10,
  },

});