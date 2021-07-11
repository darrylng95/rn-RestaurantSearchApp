import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import Lightbox from "react-native-lightbox";
import { Card, Title, Paragraph } from "react-native-paper";
import { Rating } from "react-native-rating-element";
import {Linking} from 'react-native'


import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation, navigator }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.nameStyle}>{result.name}</Text>
      <View style={{ flexDirection: "row", marginBottom: 5 }}>
        <Text style={styles.categoryStyle}>Categories:</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={result.categories}
          keyExtractor={(category) => category.title}
          renderItem={(category) => {
            return (
              <Text style={styles.categoryStyle}>{category.item.title}</Text>
            );
          }}
        />
      </View>
      <Text style={styles.categoryStyle}>{result.price}</Text>
      <View style={{ marginLeft: 15, marginBottom: 5 }}>
        <Rating
          rated={result.rating}
          totalCount={5}
          ratingColor="#666699"
          ratingBackgroundColor="#d4d4d4"
          size={24}
          readonly // by default is false
          icon="ios-star"
          direction="row"
        />
      </View>
      <Text style={{color: "#666699",marginLeft:15, marginBottom:5}}> Total Reviews: {result.review_count}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Lightbox
              navigator={navigator}
              activeProps={{ width: "100%", height: "90%" }}
            >
              <Image
                style={styles.imageStyle}
                source={{
                  uri: item,
                }}
              />
            </Lightbox>
          );
        }}
      />
      <Card style={styles.cardStyle}>
        <Card.Content>
          <Title>Address</Title>
          <Paragraph>
            <Text>{result.location.address1} </Text>
            <Text>{result.location.address2}</Text>
          </Paragraph>
          <Text>
            {result.location.state} {result.location.zip_code}
          </Text>
          {result.phone ? <Title>Phone Number</Title> : null}
          <Text onPress={()=>{Linking.openURL(`tel:${result.phone}`)}}>{result.phone}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

ResultShowScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  cardStyle: {
    marginLeft: 15,
    marginRight: 15,
  },
  imageStyle: {
    width: 350,
    height: 300,
    borderRadius: 4,
    marginBottom: 5,
    marginLeft: 15,
  },
  nameStyle: {
    fontWeight: "bold",
    color: "#666699",
    fontSize: 16,
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  bodyStyle: {
    color: "#666699",
    fontSize: 15,
  },
  categoryStyle: {
    color: "#666699",
    fontSize: 11,
    marginLeft: 15,
  },
});

export default ResultShowScreen;
