import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class App extends Component {
  state = {
    placeName: ""
  };

  onPlaceNameChange = this.onPlaceNameChange.bind(this);

  onPlaceNameChange(value) {
    this.setState({
      placeName: value
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.onPlaceNameChange}
        />
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
    top: 50
  },
  input: {
    width: 300,
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }
});
