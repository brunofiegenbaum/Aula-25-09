import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Contador</Text>

            <View style={styles.areaContador}>

                <TouchableOpacity
                    style={styles.botaoContador}
                    onPress={() => setContador(contador - 1)}
                >
                    <Text style={styles.textoBotao}>-</Text>
                </TouchableOpacity>

                <Text style={styles.numero}>
                    {contador}
                </Text>

                <TouchableOpacity
                    style={styles.botaoContador}
                    onPress={() => setContador(contador + 1)}
                >
                    <Text style={styles.textoBotao}>+</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 70,
    },

    areaContador: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 30,
        paddingTop: 80,
    },

    botaoContador: {
        width: 70,
        height: 70,
        borderRadius: 15,
        backgroundColor: '#d3d3d3',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBotao: {
        fontSize: 40,
        fontWeight: 'bold',
    },

    numero: {
        fontSize: 50,
        fontWeight: 'bold',
        minWidth: 80,
        textAlign: 'center',
    },
});