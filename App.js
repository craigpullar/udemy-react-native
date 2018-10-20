import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PlaceInput from "./src/components/place-input";
import PlaceNameList from "./src/components/place-name-list";
import PlaceDetails from "./src/components/place-details";

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: undefined
  };

  onPlaceSubmit = this.onPlaceSubmit.bind(this);
  onItemSelected = this.onItemSelected.bind(this);
  onPlaceDeleted = this.onPlaceDeleted.bind(this);
  onModalClose = this.onModalClose.bind(this);

  onPlaceSubmit({ placeName }) {
    this.setState(prevState => ({
      places: [
        ...prevState.places,
        {
          key: `${Math.random()}${placeName}`,
          name: placeName,
          image: {
            uri:
              "https://www.discovergreece.com/~/media/images/destination-header/r/rhodes/lindos-greek-island-of-rhodes.ashx"
          }
        }
      ]
    }));
  }

  onItemSelected(index) {
    this.setState(prevState => ({
      selectedPlace: prevState.places.find(({ key }) => key === index)
    }));
  }

  onPlaceDeleted() {
    this.setState(prevState => ({
      places: prevState.places.filter(
        ({ key: stateIndex }) => prevState.selectedPlace.key !== stateIndex
      ),
      selectedPlace: undefined
    }));
  }

  onModalClose() {
    this.setState({ selectedPlace: undefined });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetails
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.onPlaceDeleted}
          onModalClose={this.onModalClose}
        />
        <PlaceInput handleSubmit={this.onPlaceSubmit} />
        <PlaceNameList
          places={this.state.places}
          onItemSelected={this.onItemSelected}
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
    top: 50,
    padding: 20
  }
});
