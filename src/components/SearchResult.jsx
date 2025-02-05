/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Button, Form, Stack, Container } from "react-bootstrap";
import MovieCard from "./MovieCard";
const SearchResult = ({ movie, setFavMovies }) => {
  const selectGenreRef = useRef(null);

  //   Add Movie to favorite list
  const handleOnClickAddFav = () => {
    const favMovie = { ...movie, genre: selectGenreRef.current.value };
    setFavMovies((prevValue) => [...prevValue, favMovie]);
  };
  return (
    <Container>
      <h2>Search Result</h2>
      <MovieCard movie={movie} />

      <Stack className="mt-2" direction="horizontal" gap={2}>
        <Form.Select
          aria-label="Default select example"
          style={{ width: "11rem" }}
          ref={selectGenreRef}
        >
          <option>Select Genre</option>
          <option value="comedy">Comedy</option>
          <option value="romance">Romance</option>
          <option value="drama">Drama</option>
        </Form.Select>
        <Button variant="primary" onClick={handleOnClickAddFav}>
          Add to Fav
        </Button>
      </Stack>
    </Container>
  );
};

export default SearchResult;
