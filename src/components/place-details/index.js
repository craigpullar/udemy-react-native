import React from "react";
import PropTypes from "prop-types";
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const PlaceDetails = ({ selectedPlace, onItemDeleted, onModalClose }) => (
  <Modal
    onRequestClose={onModalClose}
    visible={!selectedPlace.hidden}
    animationType="slide"
  >
    <View style={styles.modalContainer}>
      <Image source={selectedPlace.image} style={styles.placeImage} />
      <Text style={styles.placeName}>{selectedPlace.name}</Text>
      <View>
        <TouchableOpacity onPress={onItemDeleted}>
          <View style={styles.deleteButton}>
            <Icon size={30} name="ios-trash" color="red" />
          </View>
        </TouchableOpacity>
        <Button title="Close" onPress={onModalClose} />
      </View>
    </View>
  </Modal>
);

PlaceDetails.propTypes = {
  selectedPlace: PropTypes.object,
  onItemDeleted: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired
};

PlaceDetails.defaultProps = {
  selectedPlace: {
    name: "",
    image: null,
    hidden: true
  }
};

export default PlaceDetails;
