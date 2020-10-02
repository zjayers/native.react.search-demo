// - Imports
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import { yelpAPI } from "../api/yelp";

/**
 * ItemScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ItemScreen = ({ navigation }) => {
  const [resultData, setResultData] = useState(null);

  const itemID = navigation.getParam("id");

  const getResultById = async (id) => {
    const response = await yelpAPI.get(`/${id}`);
    setResultData(response.data);
  };

  useEffect(() => {
    getResultById(itemID);
  }, []);

  return (
    <View style={styles.baseContainer}>
      {resultData ? (
        <>
          <Text style={styles.primaryText}>{resultData.title}</Text>
          <FlatList
            data={resultData.photos}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.image} />
            )}
            keyExtractor={(photo) => photo}
          />
        </>
      ) : (
        <ActivityIndicator style={styles.activityIndicator} />
      )}
    </View>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: { flex: 1 },
  primaryText: {
    fontSize: 30,
  },
  activityIndicator: {
    alignSelf: "center",
    flex: 1,
  },
  image: {
    height: 200,
    width: 240,
  },
});

// - Exports
export default ItemScreen;
