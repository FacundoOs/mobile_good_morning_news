import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Auth from "../modules/authentication";
const Login = () => {
  const auth = new Auth({ host: "http://localhost:3000/api/v1" });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const loginHandler = async () => {
    try {
      debugger;
      let response = await auth.signIn(email, password);
      setMessage(response.data.message);
      return <ArticlesList />
    } catch (error) {
      debugger;
    }
  };
  return (
    <View style={styles.container}>
      <Text>Please Log in</Text>
      <Text>{message}</Text>
      <TextInput
        editable
        placeholder="email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        editable
        placeholder="password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="log in" onPress={() => loginHandler()} />
      {/* <Button title="Login" color="#841584" onPress={() => props.navigation.navigate("Articles", {customParameter: {message}.toString() })} /> */}
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
