/* eslint-disable react/prop-types */
import { Card, Badge, Button, Stack } from "react-bootstrap";

const MovieCard = ({ movie, onHandleRemoveBtnClick }) => {
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img variant="top" src={movie.Poster} style={{ height: "20rem" }} />
      <Card.Body>
        <Card.Text>
          <b>{movie.Title}</b>
        </Card.Text>
        <Card.Text className="overflow-scroll" style={{ height: "8rem" }}>
          {movie.Plot}
        </Card.Text>
        <Stack
          direction="horizontal"
          className="d-flex justify-content-between"
        >
          <Badge key={movie.imdbID} bg="danger">
            {movie.Country?.split(",")[0]}
          </Badge>

          {movie.genre && (
            <Button
              variant="outline-danger"
              onClick={() => onHandleRemoveBtnClick(movie.imdbID)}
            >
              Remove
            </Button>
          )}
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
