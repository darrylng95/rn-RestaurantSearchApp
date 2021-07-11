import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styleSheets } from "min-document";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={true}
        style={styles.inputStyle}
        placeholder="Search..."
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};
SearchBar.propTypes = {};

const styles = StyleSheet.create({
  background: {
    marginTop: 15,
    backgroundColor: "#C0C0C0",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  inputStyle: {
    borderColor: "#666699",
    fontFamily: "Verdana",
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    color: "#666699",
    marginHorizontal: 15,
  },
});

export default SearchBar;
