import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import axios from "axios";

const Home = ({ navigation }) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    axios
      .get("https://61973b0caf46280017e7e4b0.mockapi.io/todos")
      .then((res) => {
        setTodo(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.bgHead}>
        <Text style={styles.titleHead}>My Todo</Text>
        <Text style={styles.hello}>Let's finish your todo list!</Text>
      </View>
      <ScrollView style={styles.sizeScroll}>
        {todo?.map((item) => (
          <View
            style={styles.bgTodo}
            onPress={() => navigation.navigate("Edit", item)}
          >
            <TouchableOpacity key={item.id} style={styles.btnTodo}>
              <Text style={styles.nameTodo}>{item.name}</Text>
              <Text style={styles.status}>{item.status}</Text>
            </TouchableOpacity>
            <Text>{item.createdAt}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => navigation.navigate("AddTodo")}
        >
          <Text style={styles.add}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
  bgHead: {
    backgroundColor: "#0575F3",
    height: 185,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 20,
  },
  titleHead: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "700",
    paddingHorizontal: 15,
    marginTop: 85,
  },
  hello: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 15,
    marginTop: 6,
  },
  sizeScroll: {
    height: 320,
  },
  bgTodo: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  btnTodo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  nameTodo: {
    color: "#090A0C",
    fontSize: 18,
    fontWeight: "600",
  },
  status: {
    color: "#0575F3",
    fontSize: 15,
    fontWeight: "600",
  },
  btn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  btnAdd: {
    color: "#fff",
    backgroundColor: "#0575F3",
    width: 50,
    height: 50,
    paddingTop: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    marginHorizontal: 15,
    marginTop: 20,
  },
  add: {
    fontWeight: "500",
    fontSize: 20,
    color: "#fff",
  },
});
