import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ListItem from "./src/components/list-item";
import InputContainer from "./src/components/input-container";
import PlaceNameList from "./src/components/place-name-list";

export default class App extends Component {
  state = {
    places: []
  };

  onPlaceSubmit = this.onPlaceSubmit.bind(this);

  onPlaceSubmit({ placeName }) {
    this.setState(prevState => ({
      places: [...prevState.places, placeName]
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <InputContainer handleSubmit={this.onPlaceSubmit} />
        <PlaceNameList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    top: 50,
    padding: 20
  }
});
