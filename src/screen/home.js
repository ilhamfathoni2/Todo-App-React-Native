import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.bgHead}>
        <Text style={styles.titleHead}>My Todo</Text>
        <Text style={styles.hello}>Always remember your activities!</Text>
      </View>
      <ScrollView style={styles.sizeScroll}>
        <TouchableOpacity style={styles.bgTodo}>
          <Text style={styles.nameTodo}>Renang</Text>
          <Text style={styles.status}>Doing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bgTodo}>
          <Text style={styles.nameTodo}>Ngoding</Text>
          <Text style={styles.status}>Doing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bgTodo}>
          <Text style={styles.nameTodo}>Debugging</Text>
          <Text style={styles.status}>Doing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bgTodo}>
          <Text style={styles.nameTodo}>Jogging</Text>
          <Text style={styles.status}>Doing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bgTodo}>
          <Text style={styles.nameTodo}>Meeting</Text>
          <Text style={styles.status}>Doing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bgTodo}>
          <Text style={styles.nameTodo}>Deploy React Native</Text>
          <Text style={styles.status}>Doing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bgTodo}>
          <Text style={styles.nameTodo}>Dinner</Text>
          <Text style={styles.status}>Doing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bgTodo}>
          <Text style={styles.nameTodo}>Renang</Text>
          <Text style={styles.status}>Doing</Text>
        </TouchableOpacity>
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
    height: 120,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 20,
  },
  titleHead: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
    paddingHorizontal: 15,
    marginTop: 40,
  },
  hello: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 15,
    marginTop: 5,
  },
  sizeScroll: {
    height: 320,
  },
  bgTodo: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 19,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 5,
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
