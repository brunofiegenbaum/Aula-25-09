import { Stack, Link } from "expo-router";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";


export default function Playlists() {

  return (

    <SafeAreaView style={styles.main} edges={["bottom"]}>

      <Stack.Screen
        options={{
          title: "Playlists"
        }}
      />


      <Text style={styles.titulo}>
        Suas Playlists
      </Text>


      <Text style={styles.subtitulo}>
        Escolha uma playlist
      </Text>


      <ScrollView style={styles.scrollView}>


        <View style={styles.listaPlaylists}>


          <View style={styles.caixaPlaylist}>

            <View>

              <Text style={styles.nomePlaylist}>
                Rock Clássico
              </Text>

              <Text style={styles.descPlaylist}>
                AC/DC, Guns N' Roses, Metallica
              </Text>

            </View>


            <Link
              href="/rock"
              style={styles.link}
            >
              ABRIR
            </Link>

          </View>



          <View style={styles.caixaPlaylist}>

            <View>

              <Text style={styles.nomePlaylist}>
                System of a Down
              </Text>

              <Text style={styles.descPlaylist}>
                Toxicity, Chop Suey!, Aerials
              </Text>

            </View>


            <Link
              href="/system"
              style={styles.link}
            >
              ABRIR
            </Link>

          </View>



          <View style={styles.caixaPlaylist}>

            <View>

              <Text style={styles.nomePlaylist}>
                Anos 2000
              </Text>

              <Text style={styles.descPlaylist}>
                Gorillaz, Eminem, Arctic Monkeys
              </Text>

            </View>


            <Link
              href="/anos2000"
              style={styles.link}
            >
              ABRIR
            </Link>

          </View>


        </View>


      </ScrollView>


      <View style={styles.caixaCriar}>

        <Text>
          Quer criar uma nova playlist?
        </Text>

        <View style={styles.botaoCriar}>

          <Button
            title="CRIAR PLAYLIST"
            color="white"
          />

        </View>

      </View>


    </SafeAreaView>

  );

}



const styles = StyleSheet.create({

  main: {

    flex: 1,

    backgroundColor: "#fff",

    alignItems: "flex-start",

    justifyContent: "flex-start",

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

    paddingTop: 5

  },


  scrollView: {

    width: "100%",

    paddingTop: 20

  },


  listaPlaylists: {

    gap: 10,

    paddingBottom: 10

  },


  caixaPlaylist: {

    width: "100%",

    height: 100,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    backgroundColor: "#D3D3D3",

    borderRadius: 15,

    borderWidth: 1,

    padding: 15

  },


  nomePlaylist: {

    fontSize: 18,

    fontWeight: "bold"

  },


  descPlaylist: {

    fontSize: 14,

    color: "gray",

    paddingTop: 5,

    maxWidth: 220

  },


  link: {

    color: "green",

    fontWeight: "bold",

    fontSize: 14

  },


  botaoCriar: {

    width: 160,

    height: 35,

    backgroundColor: "green",

    borderRadius: 5,

    justifyContent: "center",

    alignItems: "center"

  },


  caixaCriar: {

    backgroundColor: "white",

    borderWidth: 1,

    borderColor: "black",

    alignItems: "center",

    borderRadius: 15,

    padding: 20,

    gap: 10,

    width: "100%"

  }

});