/* eslint-disable react/prop-types */
import { Container, Tabs, Tab } from "react-bootstrap";
import TabMoviePage from "./TabMoviePage";

const FavoriteMovies = ({ favMovies }) => {
  const comedyMovies = favMovies.filter(
    (favMovie) => favMovie.genre === "comedy"
  );
  const romanceMovies = favMovies.filter(
    (favMovie) => favMovie.genre === "romance"
  );
  const dramaMovies = favMovies.filter(
    (favMovie) => favMovie.genre === "drama"
  );
  return (
    <Container>
      <h2>Favorite Movies</h2>

      <Tabs
        defaultActiveKey="all"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="all" title="All">
          <TabMoviePage favMovies={favMovies} />
        </Tab>
        <Tab eventKey="comedy" title="Comedy">
          <TabMoviePage favMovies={comedyMovies} />
        </Tab>
        <Tab eventKey="romance" title="Romance">
          <TabMoviePage favMovies={romanceMovies} />
        </Tab>
        <Tab eventKey="drama" title="Drama">
          <TabMoviePage favMovies={dramaMovies} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default FavoriteMovies;
