import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Alert } from "react-bootstrap";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import SearchResult from "./components/SearchResult";
import FavoriteMovies from "./components/FavoriteMovies";

function App() {
  const [movie, setMovie] = useState({});
  const [favMovies, setFavMovies] = useState([]);

  // Check if movie is already in list
  const isMovieAdded = () => {
    return favMovies.some((favMovie) => movie.imdbID === favMovie.imdbID);
  };

  // Remove movie from fav List
  const onHandleRemoveBtnClick = (movieId) => {
    const updatedMovies = favMovies.filter(
      (favMovie) => favMovie.imdbID !== movieId
    );
    setFavMovies(updatedMovies);
  };
  return (
    <Container fluid>
      <Header />
      <SearchBar setMovie={setMovie} />

      <Row>
        <Col
          xs={4}
          className="d-flex justify-content-center align-items-center"
        >
          {Object.keys(movie).length > 2 ? (
            <SearchResult
              movie={movie}
              setFavMovies={setFavMovies}
              isMovieAdded={isMovieAdded}
            />
          ) : (
            <Alert variant="warning">Please search for a movie</Alert>
          )}
        </Col>
        <Col xs={8}>
          <FavoriteMovies
            favMovies={favMovies}
            onHandleRemoveBtnClick={onHandleRemoveBtnClick}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
