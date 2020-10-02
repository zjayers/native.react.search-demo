import { useEffect, useState } from "react";
import { yelpAPI } from "../api/yelp";

export const useSearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  /**
   * Run the use effect hook only upon initial render
   */
  useEffect(() => {
    searchYelpAPI("Food");
  }, []);

  /**
   * Search The Yelp API and get results
   * @param searchTerm
   * @returns {Promise<void>}
   */
  const searchYelpAPI = async (searchTerm) => {
    setLoading(true);
    try {
      // HTTP Request to the API
      const response = await yelpAPI.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Keller, Texas",
        },
      });

      // If results are returned, set the search results
      setSearchResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return [searchResults, loading, errorMessage, searchYelpAPI];
};
