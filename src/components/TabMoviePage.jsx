/* eslint-disable react/prop-types */
import { Row, Col, Alert } from "react-bootstrap";
import MovieCard from "./MovieCard";

const TabMoviePage = ({ favMovies, onHandleRemoveBtnClick, genre }) => {
  return (
    <>
      {favMovies.length ? (
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
      ) : (
        <Alert variant="info">Please select a {genre} movie</Alert>
      )}
    </>
  );
};

export default TabMoviePage;
