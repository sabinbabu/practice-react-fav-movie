import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import SearchResult from "./components/SearchResult";

function App() {
  const [movie, setMovie] = useState({});
  const [favMovies, setFavMovies] = useState([]);
  console.log(favMovies);

  return (
    <Container fluid>
      <Header />
      <SearchBar setMovie={setMovie} />

      <Row>
        <Col
          xs={4}
          className="d-flex justify-content-center align-items-center"
        >
          <SearchResult movie={movie} setFavMovies={setFavMovies} />
        </Col>
        <Col xs={8}></Col>
      </Row>
    </Container>
  );
}

export default App;
