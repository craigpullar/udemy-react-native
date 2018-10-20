import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const ListItem = ({ placeName, onItemPressed, placeImage }) => (
  <TouchableOpacity onPress={onItemPressed}>
    <View style={styles.listItem}>
      <Image
        source={placeImage}
        style={styles.placeImage}
        resizeMode="contain"
      />
      <Text>{placeName}</Text>
    </View>
  </TouchableOpacity>
);

ListItem.propTypes = {
  placeName: PropTypes.string.isRequired,
  onItemPressed: PropTypes.func.isRequired,
  placeImage: PropTypes.string.isRequired
};

export default ListItem;
