import { useEffect, useState } from "react";
import { ReactComponent as Insync } from "./assets/insync.svg";
import { ReactComponent as Search } from "./assets/search.svg";
import Card from "./components/Card";
import SingleCard from "./components/SingleCard";

function App() {
  const [data, setdata] = useState();
  const [modal, setModal] = useState(null);
  const [movieName, setMovieName] = useState("");

  const fetchData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    const res = await data.results;
    setdata(res);
  };

  const byMovieName = async () => {
    if (movieName !== "") {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movieName}`
      );
      const data = await response.json();
      const res = await data.results;
      setdata(res);
      setMovieName("")
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={`container ${modal ? "opacity" : ""}`}>
        <div className="header">
          <Insync style={{ height: "3.5rem" }} />
          <div className="searchContainer">
            <Search
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "0.5rem",
                cursor:"pointer"
              }}
              onClick={() => byMovieName()}
            />
            <input
              type="text"
              name="movie"
              value={movieName}
              placeholder="Search here"
              onChange={(e) => setMovieName(e.target.value)}
            />
          </div>
        </div>
        <div className="border"></div>

        <p className="movie">Most Recent Movies</p>

        <div className="cardContainer">
          {data?.map((movie, ind) => (
            <Card key={ind} movie={movie} setModal={setModal} />
          ))}
        </div>
      </div>
      {modal && <SingleCard modal={modal} setModal={setModal} />}
    </>
  );
}

export default App;
