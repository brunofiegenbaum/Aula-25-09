import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("bordel.db");

db.execSync(`
  CREATE TABLE IF NOT EXISTS bordeis (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    cor TEXT NOT NULL
  );
`);

const colunas = db.getAllSync("PRAGMA table_info(bordeis)");
const possuiCidade = colunas.some((coluna) => coluna.name === "cidade");
const possuiCor = colunas.some((coluna) => coluna.name === "cor");

if (possuiCidade) {
  if (!possuiCor) {
    db.execSync("ALTER TABLE bordeis ADD COLUMN cor TEXT NOT NULL DEFAULT ''");
  }

  db.execSync(`
    BEGIN TRANSACTION;

    CREATE TABLE IF NOT EXISTS bordeis_nova (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      cor TEXT NOT NULL
    );

    INSERT OR REPLACE INTO bordeis_nova (id, nome, cor)
    SELECT id, nome, COALESCE(cor, '')
    FROM bordeis;

    DROP TABLE bordeis;
    ALTER TABLE bordeis_nova RENAME TO bordeis;

    COMMIT;
  `);
}

function listar() {
  return db.getAllSync("SELECT * FROM bordeis ORDER BY id DESC");
}

function adicionar(nome, cor) {
  db.runSync(
    "INSERT INTO bordeis (nome, cor) VALUES (?, ?)",
    [nome, cor]
  );
}

function excluir(id) {
  db.runSync("DELETE FROM bordeis WHERE id = ?", [id]);
}

export default function Bordel() {
  const [nome, setNome] = useState("");
  const [cor, setCor] = useState("");
  const [lista, setLista] = useState([]);

  function carregar() {
    setLista(listar());
  }

  useEffect(() => {
    carregar();
  }, []);

  function salvar() {
    if (nome.trim() === "" || cor.trim() === "") {
      return;
    }

    adicionar(nome.trim(), cor.trim());
    setNome("");
    setCor("");
    carregar();
  }

  function remover(id) {
    excluir(id);
    carregar();
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Cadastro de Bordel" }} />

      <Text style={styles.titulo}>Cadastro de Bordel</Text>
      <Text style={styles.subtitulo}>Nome e cor salvos no SQLite</Text>

      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome do bordel"
      />

      <TextInput
        style={styles.campo}
        value={cor}
        onChangeText={setCor}
        placeholder="Cor"
      />

      <Button title="Cadastrar" onPress={salvar} />

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.dadosItem}>
              <Text style={styles.itemNome}>{item.nome}</Text>
              <Text style={styles.itemCor}>Cor: {item.cor}</Text>
            </View>

            <Button title="Excluir" onPress={() => remover(item.id)} />
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum bordel cadastrado.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
  },

  subtitulo: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
    marginBottom: 16,
  },

  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: "#111827",
    marginBottom: 12,
  },

  lista: {
    flex: 1,
    marginTop: 16,
  },

  item: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  dadosItem: {
    flex: 1,
  },

  itemNome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },

  itemCor: {
    fontSize: 14,
    color: "#4B5563",
    marginTop: 4,
  },

  vazio: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 20,
  },
});
