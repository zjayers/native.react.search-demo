// - Imports
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

/**
 * RestItem Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const RestItem = ({ item: { image_url, name, rating, review_count } }) => {
  return (
    <View style={styles.baseContainer}>
      <Image source={{ uri: image_url }} style={styles.imageStyle} />
      <Text style={styles.primaryText}>{name}</Text>
      <Text>{`${rating} Stars, ${review_count} Reviews`}</Text>
    </View>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    marginLeft: 15,
  },
  primaryText: {
    fontWeight: "bold",
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
});

// - Exports
export default RestItem;
