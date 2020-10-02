// - Imports
import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import RestList from "../components/RestList";
import { useSearchResults } from "../hooks/useSearchResults";
import SearchBar from "../components/SearchBar";

/**
 * SearchScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const SearchScreen = () => {
  // State
  const [searchContents, setSearchContents] = useState("");
  const [
    searchResults,
    loading,
    errorMessage,
    searchYelpAPI,
  ] = useSearchResults();

  /**
   * Search Submit Handler
   * @returns {Promise<void>}
   */
  const handleSearchSubmit = async () => {
    await searchYelpAPI(searchContents);
  };

  const filterResultsByPrice = (price) => {
    return searchResults.filter((result) => result.price === price);
  };

  /**
   * Render Search Results
   * @returns {*}
   */
  const renderSearchResults = () => {
    // If the app is loading, render the activity spinner
    if (loading)
      return (
        <ActivityIndicator style={styles.activityIndicator} size={"large"} />
      );

    // If an error occurs, render the error message
    if (errorMessage) return <Text>{errorMessage}</Text>;

    const $items = filterResultsByPrice("$");
    const $$items = filterResultsByPrice("$$");
    const $$$items = filterResultsByPrice("$$$");
    const $$$$items = filterResultsByPrice("$$$$");

    // If everything is OK, render the search results
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestList title={"Cheap"} items={$items} />
        <RestList title={"Pricey"} items={$$items} />
        <RestList title={"Big Spender"} items={$$$items} />
        <RestList title={"Millionaire"} items={$$$$items} />
      </ScrollView>
    );
  };

  return (
    <View style={styles.baseContainer}>
      {/* The below spread operator syntax allows the method names to be passed directly to props
             without having to use the syntax of 'setSearchContents={setSearchContents}'*/}
      <SearchBar
        {...{ searchContents, setSearchContents, handleSearchSubmit }}
      />
      {renderSearchResults()}
    </View>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  primaryText: {
    fontSize: 30,
  },
  activityIndicator: {
    alignSelf: "center",
    flex: 1,
  },
});

// - Exports
export default SearchScreen;
