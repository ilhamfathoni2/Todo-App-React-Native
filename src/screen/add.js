import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const AddTodo = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.sizeScroll}>
        <TouchableOpacity style={styles.bgTodo}>
          <Text style={styles.nameTodo}>Renang</Text>
          <Text style={styles.status}>Doing</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.btnAdd}>
        <Text style={styles.add}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
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
    height: 100,
  },
  bgTodo: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 19,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    marginTop: 20,
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
  btnAdd: {
    color: "#fff",
    backgroundColor: "#0575F3",
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 50,
  },
  add: {
    fontWeight: "500",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});
