import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import axios from "axios";

const Home = ({ navigation }) => {
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    setIsLoading(true);
    axios
      .get("https://61973b0caf46280017e7e4b0.mockapi.io/todo")
      .then((res) => {
        setTodo(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  };

  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Edit", item)}
        style={styles.bgTodo}
      >
        <View style={styles.btnTodo}>
          <Text style={styles.nameTodo}>{item.name}</Text>
          {(() => {
            if (item.status === "Plan") {
              return <Text style={styles.plan}>{item.status}</Text>;
            } else if (item.status === "Doing") {
              return <Text style={styles.doing}>{item.status}</Text>;
            } else if (item.status === "Done") {
              return <Text style={styles.done}>{item.status}</Text>;
            }
          })()}
        </View>
        <Text style={styles.date}>{item.date}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.bgHead}>
        <Text style={styles.titleHead}>My Todo</Text>
        <Text style={styles.hello}>Let's finish your todo list!</Text>
      </View>
      <FlatList
        data={todo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={_renderItem}
        refreshing={isLoading}
        onRefresh={getTodo}
      />
      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => navigation.navigate("AddTodo")}
        >
          <Text style={styles.add}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bgBtnAdd}></View>
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
    color: "#393939",
    fontSize: 18,
    fontWeight: "700",
  },
  date: {
    color: "#787878",
  },
  plan: {
    color: "#787878",
    fontSize: 15,
    fontWeight: "bold",
  },
  doing: {
    color: "#0575F3",
    fontSize: 15,
    fontWeight: "bold",
  },
  done: {
    color: "#77D970",
    fontSize: 15,
    fontWeight: "bold",
  },
  btn: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btnAdd: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    paddingTop: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    marginHorizontal: 15,
    marginBottom: -25,
    marginTop: -20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 13.97,
    elevation: 20,
    borderColor: "#0575F3",
    borderWidth: 0.5,
    zIndex: 9999,
  },
  add: {
    fontWeight: "500",
    fontSize: 20,
    color: "#0575F3",
  },
  bgBtnAdd: {
    backgroundColor: "#0575F3",
    height: 50,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    zIndex: 9888,
  },
});
