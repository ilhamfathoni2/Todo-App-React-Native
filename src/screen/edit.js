import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const EditTodo = (props) => {
  let idTodo = props.route.params.id;
  let nameList = props.route.params.name;
  let description = props.route.params.desc;
  let dates = props.route.params.date;
  let statusTodo = props.route.params.status;

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState(nameList);
  const [desc, setDesc] = useState(description);
  const [date, setDate] = useState(dates);
  const [status, setStatus] = useState(statusTodo);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const data = {
    name,
    desc,
    date,
    status,
  };
  const body = JSON.stringify(data);

  const deleteTodo = () => {
    setIsLoading(true);
    axios
      .delete(
        `https://61973b0caf46280017e7e4b0.mockapi.io/todo/${idTodo}`,
        config
      )
      .then((response) => {
        setIsLoading(false);
        alert("Success delete todo!");
      })
      .catch((error) => alert(error));
  };

  const updateTodo = () => {
    setIsLoading(true);
    axios
      .put(
        `https://61973b0caf46280017e7e4b0.mockapi.io/todo/${idTodo}`,
        body,
        config
      )
      .then((response) => {
        setIsLoading(false);
        alert("Success Update!");
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.bgHead}>
        <Text style={styles.titleHead}>Detail</Text>
      </View>
      <ScrollView>
        <View style={styles.mrTop}>
          <Text style={styles.nameTodo}>Todo Name</Text>
          <TextInput
            style={styles.bgTodo}
            value={name}
            onChangeText={(value) => setName(value)}
          />
        </View>
        <View style={styles.mrTop}>
          <Text style={styles.nameTodo}>Description</Text>
          <TextInput
            style={styles.bgTodo}
            value={desc}
            onChangeText={(value) => setDesc(value)}
          />
        </View>
        <View style={styles.mrTop}>
          <Text style={styles.nameTodo}>Date (DD MM YYYY)</Text>
          <TextInputMask
            style={styles.bgTodo}
            type={"datetime"}
            value={date}
            onChangeText={(value) => setDate(value)}
            options={{
              format: "DD-MM-YYYY",
            }}
          />
        </View>
        <View style={styles.mrTop}>
          <Text style={styles.nameTodo}>Status</Text>
          <Picker
            style={styles.bgTodo}
            selectedValue={status}
            onValueChange={(value) => setStatus(value)}
          >
            <Picker.Item label="Plan" value="Plan" />
            <Picker.Item label="Doing" value="Doing" />
            <Picker.Item label="Done" value="Done" />
          </Picker>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={deleteTodo} style={styles.btnDel}>
        <Text style={styles.add}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={updateTodo} style={styles.btnAdd}>
        <Text style={styles.add}>{isLoading ? "Save..." : "Save Cahange"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
  bgHead: {
    backgroundColor: "#0575F3",
    height: 110,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 5,
  },
  titleHead: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "600",
    paddingHorizontal: 15,
    marginTop: 60,
  },
  mrTop: {
    marginTop: 20,
  },
  bgTodo: {
    flex: 1,
    fontSize: 18,
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  nameTodo: {
    color: "#787878",
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 15,
  },
  status: {
    color: "#0575F3",
    fontSize: 15,
    fontWeight: "600",
  },
  btnAdd: {
    backgroundColor: "#0575F3",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 30,
  },
  btnDel: {
    backgroundColor: "#E02401",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  add: {
    fontWeight: "500",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});
