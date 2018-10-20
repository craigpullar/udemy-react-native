import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import ListItem from "../list-item";
import styles from "./styles";

const PlaceNameList = ({ places, onItemSelected }) => (
  <FlatList
    style={styles.placeNameList}
    data={places}
    renderItem={({ item: { name: place, key, image } }, index) => (
      <ListItem
        placeName={place}
        placeImage={image}
        key={index}
        onItemPressed={() => onItemSelected(key)}
      />
    )}
  />
);

PlaceNameList.propTypes = {
  places: PropTypes.array.isRequired,
  onItemSelected: PropTypes.func.isRequired
};

export default PlaceNameList;
