import React from "react";
import { registerRootComponent } from "expo";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/v1";

const ConnectedApp = () => {
  return <App />;
};

registerRootComponent(ConnectedApp);
