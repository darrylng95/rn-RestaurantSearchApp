import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Singapore",
        },
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (err) {
      console.log(err);
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    searchAPI("fish");
  }, []);

  return [searchAPI, results, errorMessage];
};
