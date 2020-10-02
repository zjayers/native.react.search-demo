// - Imports
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import RestItem from "./RestItem";

/**
 * RestList Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const RestList = ({ title, items, navigation }) => {
  if (!items.length) {
    return <></>;
  }

  return (
    <View style={styles.baseContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Item", { id: item.id });
            }}
          >
            <RestItem item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {},
  titleStyle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
    marginVertical: 8,
  },
});

// - Exports
export default withNavigation(RestList);
