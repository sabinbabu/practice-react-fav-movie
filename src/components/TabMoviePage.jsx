/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

const TabMoviePage = ({ favMovies }) => {
  return (
    <Row>
      {favMovies.map((favMovie) => (
        <Col key={favMovie.imdbID}>
          <MovieCard movie={favMovie} />
        </Col>
      ))}
    </Row>
  );
};

export default TabMoviePage;
