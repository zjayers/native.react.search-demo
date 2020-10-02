// - Imports
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

/**
 * SearchBar Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const SearchBar = ({
  searchContents,
  setSearchContents,
  handleSearchSubmit,
}) => {
  /* State */
  const [searchActive, setSearchActive] = useState(false);

  const getIconColor = () => (searchActive ? "dodgerblue" : "black");
  const handleTextChange = (text) => setSearchContents(text);
  const toggleSearchActive = () =>
    setSearchActive((searchActive) => !searchActive);

  return (
    <View style={styles.baseContainer}>
      <Feather
        name={"search"}
        style={{ ...styles.searchIcon, color: getIconColor() }}
      />
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        style={styles.inputField}
        placeholder={"Search"}
        onFocus={toggleSearchActive}
        onBlur={toggleSearchActive}
        onChangeText={handleTextChange}
        value={searchContents}
        onEndEditing={handleSearchSubmit}
      />
    </View>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    height: 50,
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: "#F0EEEE",
    marginHorizontal: 15,
    marginVertical: 15,
  },
  inputField: {
    fontSize: 18,
    flex: 1,
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

// - Exports
export default SearchBar;
