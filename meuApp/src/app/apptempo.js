import { Stack } from "expo-router";

import {
  StyleSheet,
  Text
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";


export default function AppTempo() {

  return (

    <SafeAreaView style={styles.main} edges={["bottom"]}>

      <Stack.Screen
        options={{
          title: "App Tempo"
        }}
      />


      <Text style={styles.titulo}>
        App Tempo
      </Text>


      <Text>
        Aqui vamos colocar o projeto antigo App Tempo.
      </Text>


    </SafeAreaView>

  );

}


const styles = StyleSheet.create({

  main: {

    flex: 1,

    backgroundColor: "#fff",

    padding: 20,

    paddingTop: 20

  },


  titulo: {

    fontSize: 25,

    fontWeight: "bold",

    marginBottom: 20

  }

});