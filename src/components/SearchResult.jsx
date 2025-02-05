/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Card, Button, Badge, Form, Stack, Container } from "react-bootstrap";

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
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Text>{movie.Title}</Card.Text>
          <Card.Text>{movie.Plot}</Card.Text>
          <Badge bg="danger">{movie.Country}</Badge>
        </Card.Body>
      </Card>

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
