import { Stack } from "expo-router";

import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";


export default function Rock() {

  return (

    <SafeAreaView style={styles.main} edges={["bottom"]}>

      <Stack.Screen
        options={{
          title: "Rock Clássico"
        }}
      />


      <Text style={styles.titulo}>
        Rock Clássico
      </Text>


      <Text style={styles.subtitulo}>
        Sua seleção de músicas
      </Text>


      <ScrollView style={styles.scrollView}>


        <View style={styles.areaMusicas}>


          <View style={styles.listaMusicas}>


            <View style={styles.caixaMusicaTocando}>

              <View style={styles.descMusica}>

                <Text style={styles.nomeMusica}>
                  Thunderstruck
                </Text>

                <Text style={styles.artista}>
                  AC/DC tocando agora!
                </Text>

              </View>

              <Text>
                4:52
              </Text>

            </View>


            <View style={styles.caixaMusica}>

              <View style={styles.descMusica}>

                <Text style={styles.nomeMusica}>
                  Back in Black
                </Text>

                <Text style={styles.artista}>
                  AC/DC
                </Text>

              </View>

              <Text>
                4:15
              </Text>

            </View>


            <View style={styles.caixaMusica}>

              <View style={styles.descMusica}>

                <Text style={styles.nomeMusica}>
                  Highway to Hell
                </Text>

                <Text style={styles.artista}>
                  AC/DC
                </Text>

              </View>

              <Text>
                3:28
              </Text>

            </View>


            <View style={styles.caixaMusica}>

              <View style={styles.descMusica}>

                <Text style={styles.nomeMusica}>
                  Sweet Child O' Mine
                </Text>

                <Text style={styles.artista}>
                  Guns N' Roses
                </Text>

              </View>

              <Text>
                5:56
              </Text>

            </View>


            <View style={styles.caixaMusica}>

              <View style={styles.descMusica}>

                <Text style={styles.nomeMusica}>
                  Welcome to the Jungle
                </Text>

                <Text style={styles.artista}>
                  Guns N' Roses
                </Text>

              </View>

              <Text>
                4:31
              </Text>

            </View>


            <View style={styles.caixaMusica}>

              <View style={styles.descMusica}>

                <Text style={styles.nomeMusica}>
                  Enter Sandman
                </Text>

                <Text style={styles.artista}>
                  Metallica
                </Text>

              </View>

              <Text>
                5:31
              </Text>

            </View>


            <View style={styles.caixaMusica}>

              <View style={styles.descMusica}>

                <Text style={styles.nomeMusica}>
                  Nothing Else Matters
                </Text>

                <Text style={styles.artista}>
                  Metallica
                </Text>

              </View>

              <Text>
                6:28
              </Text>

            </View>


          </View>


        </View>


      </ScrollView>


    </SafeAreaView>

  );

}



const styles = StyleSheet.create({

  main: {

    flex: 1,

    backgroundColor: "#fff",

    padding: 15,

    paddingTop: 20

  },


  titulo: {

    fontSize: 25,

    fontWeight: "bold"

  },


  subtitulo: {

    fontSize: 15,

    color: "gray",

    paddingTop: 5,

    paddingBottom: 20

  },


  scrollView: {

    width: "100%"

  },


  areaMusicas: {

    width: "100%"

  },


  listaMusicas: {

    gap: 10,

    paddingBottom: 20

  },


  caixaMusicaTocando: {

    width: "100%",

    height: 80,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    backgroundColor: "#90EE90",

    borderRadius: 15,

    borderWidth: 1,

    padding: 15

  },


  caixaMusica: {

    width: "100%",

    height: 80,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    backgroundColor: "#D3D3D3",

    borderRadius: 15,

    borderWidth: 1,

    padding: 15

  },


  descMusica: {

    justifyContent: "center"

  },


  nomeMusica: {

    fontSize: 18

  },


  artista: {

    fontSize: 15,

    color: "gray"

  }

});