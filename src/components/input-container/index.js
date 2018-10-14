import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Button, TextInput } from "react-native";
import styles from "./styles";

class InputContainer extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  state = {
    placeName: ""
  };

  onPlaceNameChange = this.onPlaceNameChange.bind(this);
  onAddButtonPress = this.onAddButtonPress.bind(this);

  onPlaceNameChange(placeName) {
    this.setState({
      placeName
    });
  }

  onAddButtonPress() {
    if (this.state.placeName.trim() !== "") {
      this.props.handleSubmit({ placeName: this.state.placeName });
      this.setState({
        placeName: ""
      });
    }
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.onPlaceNameChange}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.onAddButtonPress}
        />
      </View>
    );
  }
}

export default InputContainer;
