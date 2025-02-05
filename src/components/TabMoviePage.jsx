/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

const TabMoviePage = ({ favMovies, onHandleRemoveBtnClick }) => {
  return (
    <Row className="overflow-scroll" style={{ height: "70vh" }}>
      {favMovies.map((favMovie) => (
        <Col key={favMovie.imdbID}>
          <MovieCard
            onHandleRemoveBtnClick={onHandleRemoveBtnClick}
            movie={favMovie}
          />
        </Col>
      ))}
    </Row>
  );
};

export default TabMoviePage;
