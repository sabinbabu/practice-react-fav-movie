/* eslint-disable react/prop-types */
import { Card, Badge } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Text>{movie.Title}</Card.Text>
        <Card.Text>{movie.Plot}</Card.Text>
        <Badge bg="danger">{movie.Country}</Badge>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
