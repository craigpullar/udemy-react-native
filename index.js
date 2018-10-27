import React, { Component } from "react";
import { Provider } from "react-redux";
import { AppRegistry } from "react-native";
import configureStore from "./src/store/configureStore";
import Home from "./src/containers/home";

const store = configureStore();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("main", () => App);
