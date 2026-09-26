import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tela2() {
  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>

      <Stack.Screen
        options={{
          title: "Tela 2",
        }}
      />

      <View style={styles.caixa}>

        <Text style={styles.titulo}>
          Segunda Tela
        </Text>

        <Text style={styles.texto}>
          Esta tela foi aberta por cima da tela inicial.
        </Text>

        <Link href="/telaemcimadatela" style={styles.link}>
          Abrir telaemcimadatela
        </Link>

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
    marginBottom: 20,
  },

  link: {
    color: "#208AEF",
    fontSize: 17,
    fontWeight: "bold",
  },

});