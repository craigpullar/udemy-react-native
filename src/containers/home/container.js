import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import PlaceInput from "../../components/place-input";
import PlaceNameList from "../../components/place-name-list";
import PlaceDetails from "../../components/place-details";

import styles from "./styles";

class Home extends Component {
  static propTypes = {
    places: PropTypes.array.isRequired,
    selectedPlace: PropTypes.object,
    onAddPlace: PropTypes.func.isRequired,
    onDeletePlace: PropTypes.func.isRequired,
    onSelectPlace: PropTypes.func.isRequired,
    onDeselectPlace: PropTypes.func.isRequired
  };

  onItemSelected = this.onItemSelected.bind(this);

  onItemSelected(key) {
    this.props.onSelectPlace({ key });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetails
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.props.onDeletePlace}
          onModalClose={this.props.onDeselectPlace}
        />
        <PlaceInput handleSubmit={this.props.onAddPlace} />
        <PlaceNameList
          places={this.props.places}
          onItemSelected={this.onItemSelected}
        />
      </View>
    );
  }
}

export default Home;
