import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";

const ListItem = ({ placeName }) => (
  <View style={styles.listItem}>
    <Text>{placeName}</Text>
  </View>
);

ListItem.propTypes = {
  placeName: PropTypes.string.isRequired
};

export default ListItem;
