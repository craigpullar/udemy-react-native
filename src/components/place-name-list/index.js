import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import ListItem from "../list-item";
import styles from "./styles";

const PlaceNameList = ({ places }) => (
  <View style={styles.placeNameList}>
    {places.map((place, index) => (
      <ListItem placeName={place} key={index} />
    ))}
  </View>
);

PlaceNameList.propTypes = {
  places: PropTypes.array.isRequired
};

export default PlaceNameList;
