import { router, Stack } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Perfil() {
  return (
    <SafeAreaView style={styles.tela}>

      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View style={styles.avatar}>
        <Text style={styles.letra}>
          B
        </Text>
      </View>

      <Text style={styles.nome}>
        Bruno
      </Text>

      <Text style={styles.descricao}>
        Desenvolvimento Mobile
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.back()}
      >
        <Text style={styles.textoBotao}>
          Voltar
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#101010",
    alignItems: "center",
    padding: 20,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#208AEF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },

  letra: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },

  nome: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },

  descricao: {
    color: "#aaa",
    fontSize: 16,
    marginTop: 5,
  },

  botao: {
    backgroundColor: "#208AEF",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 40,
  },

  textoBotao: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});