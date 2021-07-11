import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetails from "./ResultDetails";

const ResultList = ({ title, results, navigation }) => {
  if(!results.length) {
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
          <TouchableOpacity onPress={() => navigation.navigate("ResultShowScreen", {id: item.id})}> 
          <ResultDetails result={item} />
          </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

ResultList.propTypes = {};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 15,
  },
});

export default withNavigation(ResultList);
