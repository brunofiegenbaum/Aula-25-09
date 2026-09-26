import { Stack } from "expo-router";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";


export default function Calculadora() {

  const [valorAtual, setValorAtual] = useState("0");
  const [valorAnterior, setValorAnterior] = useState(null);
  const [operacao, setOperacao] = useState(null);
  const [novoNumero, setNovoNumero] = useState(false);


  function adicionarNumero(numero) {

    if (valorAtual === "Erro") {
      setValorAtual(numero);
      return;
    }

    if (novoNumero || valorAtual === "0") {
      setValorAtual(numero);
      setNovoNumero(false);
    } else {
      setValorAtual(valorAtual + numero);
    }

  }


  function adicionarDecimal() {

    if (valorAtual === "Erro") {
      setValorAtual("0.");
      return;
    }

    if (novoNumero) {
      setValorAtual("0.");
      setNovoNumero(false);
      return;
    }

    if (!valorAtual.includes(".")) {
      setValorAtual(valorAtual + ".");
    }

  }


  function escolherOperacao(op) {

    if (valorAtual === "Erro") {
      limpar();
      return;
    }

    if (valorAnterior !== null && operacao !== null && !novoNumero) {
      calcular();
    } else {
      setValorAnterior(parseFloat(valorAtual));
    }

    setOperacao(op);
    setNovoNumero(true);

  }


  function calcular() {

    if (
      valorAnterior === null ||
      operacao === null ||
      novoNumero
    ) {
      return;
    }

    const atual = parseFloat(valorAtual);

    let resultado = 0;


    if (operacao === "+") {
      resultado = valorAnterior + atual;
    }

    if (operacao === "-") {
      resultado = valorAnterior - atual;
    }

    if (operacao === "×") {
      resultado = valorAnterior * atual;
    }

    if (operacao === "÷") {

      if (atual === 0) {

        setValorAtual("Erro");
        setValorAnterior(null);
        setOperacao(null);
        setNovoNumero(true);

        return;
      }

      resultado = valorAnterior / atual;
    }


    resultado = Number(resultado.toFixed(10));


    setValorAtual(resultado.toString());

    setValorAnterior(null);

    setOperacao(null);

    setNovoNumero(true);

  }


  function limpar() {

    setValorAtual("0");

    setValorAnterior(null);

    setOperacao(null);

    setNovoNumero(false);

  }


  function apagar() {

    if (valorAtual === "Erro") {

      setValorAtual("0");

      return;
    }


    if (novoNumero) {
      return;
    }


    if (valorAtual.length === 1) {

      setValorAtual("0");

    } else {

      setValorAtual(valorAtual.slice(0, -1));

    }

  }


  function inverterSinal() {

    if (valorAtual === "Erro") {
      return;
    }

    const numero = parseFloat(valorAtual);

    setValorAtual((numero * -1).toString());

  }


  function porcentagem() {

    if (valorAtual === "Erro") {
      return;
    }

    const numero = parseFloat(valorAtual);

    setValorAtual((numero / 100).toString());

  }


  return (

    <SafeAreaView style={styles.main} edges={["bottom"]}>

      <Stack.Screen
        options={{
          title: "Calculadora"
        }}
      />


      <View style={styles.calculadora}>


        <Text style={styles.titulo}>
          Calculadora
        </Text>


        <View style={styles.display}>

          <Text
            style={styles.numeroDisplay}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {valorAtual}
          </Text>

        </View>


        <View style={styles.linha}>


          <TouchableOpacity
            style={[styles.botao, styles.botaoEspecial]}
            onPress={limpar}
          >
            <Text style={styles.textoBotaoEspecial}>
              AC
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={[styles.botao, styles.botaoEspecial]}
            onPress={inverterSinal}
          >
            <Text style={styles.textoBotaoEspecial}>
              +/-
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={[styles.botao, styles.botaoEspecial]}
            onPress={porcentagem}
          >
            <Text style={styles.textoBotaoEspecial}>
              %
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={[styles.botao, styles.botaoOperacao]}
            onPress={() => escolherOperacao("÷")}
          >
            <Text style={styles.textoOperacao}>
              ÷
            </Text>
          </TouchableOpacity>


        </View>


        <View style={styles.linha}>


          <TouchableOpacity
            style={styles.botao}
            onPress={() => adicionarNumero("7")}
          >
            <Text style={styles.textoBotao}>7</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.botao}
            onPress={() => adicionarNumero("8")}
          >
            <Text style={styles.textoBotao}>8</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.botao}
            onPress={() => adicionarNumero("9")}
          >
            <Text style={styles.textoBotao}>9</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={[styles.botao, styles.botaoOperacao]}
            onPress={() => escolherOperacao("×")}
          >
            <Text style={styles.textoOperacao}>×</Text>
          </TouchableOpacity>


        </View>


        <View style={styles.linha}>


          <TouchableOpacity
            style={styles.botao}
            onPress={() => adicionarNumero("4")}
          >
            <Text style={styles.textoBotao}>4</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.botao}
            onPress={() => adicionarNumero("5")}
          >
            <Text style={styles.textoBotao}>5</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.botao}
            onPress={() => adicionarNumero("6")}
          >
            <Text style={styles.textoBotao}>6</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={[styles.botao, styles.botaoOperacao]}
            onPress={() => escolherOperacao("-")}
          >
            <Text style={styles.textoOperacao}>-</Text>
          </TouchableOpacity>


        </View>


        <View style={styles.linha}>


          <TouchableOpacity
            style={styles.botao}
            onPress={() => adicionarNumero("1")}
          >
            <Text style={styles.textoBotao}>1</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.botao}
            onPress={() => adicionarNumero("2")}
          >
            <Text style={styles.textoBotao}>2</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.botao}
            onPress={() => adicionarNumero("3")}
          >
            <Text style={styles.textoBotao}>3</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={[styles.botao, styles.botaoOperacao]}
            onPress={() => escolherOperacao("+")}
          >
            <Text style={styles.textoOperacao}>+</Text>
          </TouchableOpacity>


        </View>


        <View style={styles.linha}>


          <TouchableOpacity
            style={styles.botao}
            onPress={apagar}
          >
            <Text style={styles.textoBotao}>
              ⌫
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.botao}
            onPress={() => adicionarNumero("0")}
          >
            <Text style={styles.textoBotao}>
              0
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.botao}
            onPress={adicionarDecimal}
          >
            <Text style={styles.textoBotao}>
              .
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={[styles.botao, styles.botaoIgual]}
            onPress={calcular}
          >
            <Text style={styles.textoOperacao}>
              =
            </Text>
          </TouchableOpacity>


        </View>


      </View>


    </SafeAreaView>

  );

}



const styles = StyleSheet.create({

  main: {

    flex: 1,

    backgroundColor: "#fff"

  },


  calculadora: {

    flex: 1,

    padding: 20,

    justifyContent: "flex-end"

  },


  titulo: {

    fontSize: 28,

    fontWeight: "bold",

    marginBottom: 20

  },


  display: {

    backgroundColor: "#eeeeee",

    borderRadius: 15,

    padding: 20,

    minHeight: 110,

    justifyContent: "center",

    alignItems: "flex-end",

    marginBottom: 20,

    borderWidth: 1,

    borderColor: "#cccccc"

  },


  numeroDisplay: {

    fontSize: 55,

    fontWeight: "bold",

    textAlign: "right"

  },


  linha: {

    flexDirection: "row",

    gap: 10,

    marginBottom: 10

  },


  botao: {

    flex: 1,

    height: 75,

    backgroundColor: "#D3D3D3",

    borderRadius: 15,

    alignItems: "center",

    justifyContent: "center",

    borderWidth: 1,

    borderColor: "black"

  },


  botaoEspecial: {

    backgroundColor: "#bbbbbb"

  },


  botaoOperacao: {

    backgroundColor: "#333333"

  },


  botaoIgual: {

    backgroundColor: "#111111"

  },


  textoBotao: {

    fontSize: 28,

    fontWeight: "bold",

    color: "black"

  },


  textoBotaoEspecial: {

    fontSize: 23,

    fontWeight: "bold",

    color: "black"

  },


  textoOperacao: {

    fontSize: 32,

    fontWeight: "bold",

    color: "white"

  }

});