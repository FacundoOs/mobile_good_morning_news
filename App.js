import React from "react";
import ArticlesList from "./src/components/ArticlesList";
import SpecificArticle from "./src/components/SpecificArticle";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ArticlesList" component={ArticlesList} />
        <Stack.Screen name="Specific Article" component={SpecificArticle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
