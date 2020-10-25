import React from "react";
import ArticlesList from "./src/components/ArticlesList";
import SpecificArticle from "./src/components/SpecificArticle";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const myOptions = {
  headerStyle: { backgroundColor: "#6691E8" },
  title: "Good Morning News",
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTintColor: "white",
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={myOptions}>
        <Stack.Screen name="Articles" component={ArticlesList} />
        <Stack.Screen name="Back" component={SpecificArticle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
