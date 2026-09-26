import { Link, Stack } from "expo-router";

import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";


export default function Inicio() {

  return (

    <SafeAreaView style={styles.main} edges={["bottom"]}>

      <Stack.Screen
        options={{
          title: "Meus Projetos"
        }}
      />


      <View style={styles.cabecalho}>

        <Text style={styles.titulo}>
          Desenvolvimento Mobile
        </Text>

        <Text style={styles.subtitulo}>
          Projetos desenvolvidos em aula
        </Text>

      </View>


      <ScrollView style={styles.scrollView}>

        <View style={styles.listaProjetos}>


          <Link
            href="/projeto2108"
            style={styles.botaoProjeto}
          >
            2108
          </Link>


          <Link
            href="/appcentral"
            style={styles.botaoProjeto}
          >
            APP CENTRAL
          </Link>


          <Link
            href="/apptempo"
            style={styles.botaoProjeto}
          >
            APP TEMPO
          </Link>


          <Link
            href="/trilhaestudante"
            style={styles.botaoProjeto}
          >
            APP TRILHA ESTUDANTE
          </Link>


          <Link
            href="/myapp"
            style={styles.botaoProjeto}
          >
            MY APP
          </Link>


          <Link
            href="/spotify"
            style={styles.botaoProjeto}
          >
            SPOTIFY
          </Link>


          <Link
            href="/contador"
            style={styles.botaoProjeto}
          >
            CONTADOR
          </Link>


          <Link
            href="/calculadora"
            style={styles.botaoProjeto}
          >
            CALCULADORA
          </Link>


          <Link
            href="/lista"
            style={styles.botaoProjeto}
          >
            LISTA
          </Link>


          <Link
            href="/bordel"
            style={styles.botaoProjeto}
          >
            CADASTRO DE BORDEL
          </Link>


        </View>

      </ScrollView>


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


  cabecalho: {

    marginBottom: 30

  },


  titulo: {

    fontSize: 28,

    fontWeight: "bold"

  },


  subtitulo: {

    fontSize: 16,

    color: "gray",

    paddingTop: 5

  },


  scrollView: {

    width: "100%"

  },


  listaProjetos: {

    gap: 15,

    paddingBottom: 30

  },


  botaoProjeto: {

    width: "100%",

    backgroundColor: "#D3D3D3",

    borderWidth: 1,

    borderColor: "black",

    borderRadius: 15,

    padding: 22,

    fontSize: 18,

    fontWeight: "bold",

    color: "black",

    textAlign: "center"

  }

});