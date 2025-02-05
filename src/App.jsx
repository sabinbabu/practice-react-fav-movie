import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import SearchResult from "./components/SearchResult";
import FavoriteMovies from "./components/FavoriteMovies";

function App() {
  const [movie, setMovie] = useState({});
  const [favMovies, setFavMovies] = useState([]);
  console.log(favMovies);

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
          <SearchResult
            movie={movie}
            setFavMovies={setFavMovies}
            isMovieAdded={isMovieAdded}
          />
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
