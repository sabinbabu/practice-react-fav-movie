/* eslint-disable react/prop-types */
import { Container, Tabs, Tab } from "react-bootstrap";
import TabMoviePage from "./TabMoviePage";

const FavoriteMovies = ({ favMovies, onHandleRemoveBtnClick }) => {
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
          <TabMoviePage
            favMovies={favMovies}
            onHandleRemoveBtnClick={onHandleRemoveBtnClick}
          />
        </Tab>
        <Tab eventKey="comedy" title="Comedy">
          <TabMoviePage
            favMovies={comedyMovies}
            genre="comedy"
            onHandleRemoveBtnClick={onHandleRemoveBtnClick}
          />
        </Tab>
        <Tab eventKey="romance" title="Romance">
          <TabMoviePage
            favMovies={romanceMovies}
            genre="romantic"
            onHandleRemoveBtnClick={onHandleRemoveBtnClick}
          />
        </Tab>
        <Tab eventKey="drama" title="Drama">
          <TabMoviePage
            favMovies={dramaMovies}
            genre="drama"
            onHandleRemoveBtnClick={onHandleRemoveBtnClick}
          />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default FavoriteMovies;
