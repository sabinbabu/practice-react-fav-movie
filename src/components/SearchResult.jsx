/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Button, Form, Stack, Container, Alert } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { useState } from "react";

const SearchResult = ({ movie, setFavMovies, isMovieAdded }) => {
  const selectGenreRef = useRef(null);
  const [errorAlert, setErrorAlert] = useState(false);

  //   Add Movie to favorite list
  const handleOnClickAddFav = () => {
    if (!(selectGenreRef.current.value === "Select Genre")) {
      setErrorAlert(false);
      const favMovie = { ...movie, genre: selectGenreRef.current.value };
      setFavMovies((prevValue) => [...prevValue, favMovie].reverse());
      selectGenreRef.current.value = "Select Genre";
    } else setErrorAlert(true);
  };

  return (
    <Container>
      <h2>Search Result</h2>
      <MovieCard movie={movie} />
      {errorAlert && <Alert variant="danger">Please select a genre</Alert>}
      <Stack className="mt-2" direction="horizontal" gap={2}>
        <Form.Select
          aria-label="Default select example"
          style={{ width: "12rem" }}
          ref={selectGenreRef}
        >
          <option>Select Genre</option>
          <option value="comedy">Comedy</option>
          <option value="romance">Romance</option>
          <option value="drama">Drama</option>
        </Form.Select>
        <Button
          variant="primary"
          onClick={handleOnClickAddFav}
          disabled={isMovieAdded()}
        >
          Add to Fav
        </Button>
      </Stack>
    </Container>
  );
};

export default SearchResult;
