/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Form, Button, Stack, Container } from "react-bootstrap";
import axios from "axios";
const SearchBar = ({ setMovie }) => {
  const searchTextRef = useRef(null);
  const MOVIE_API_KEY = "1c0b5c6b";
  const API_URL = `https://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&t=`;

  //   Search from API
  const handleOnclickSearch = async () => {
    try {
      const response = await axios.get(API_URL + searchTextRef.current.value);
      setMovie(response.data);
      searchTextRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          type="text"
          placeholder="Enter movie name"
          ref={searchTextRef}
        />
        <Button variant="primary" type="submit" onClick={handleOnclickSearch}>
          Search
        </Button>
      </Stack>
    </Container>
  );
};

export default SearchBar;
