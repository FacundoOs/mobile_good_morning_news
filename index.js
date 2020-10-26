import React from "react";
import { registerRootComponent } from "expo";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "https://good-morning-news-team1.herokuapp.com/api/v1";

const ConnectedApp = () => {
  return <App />;
};

registerRootComponent(ConnectedApp);
