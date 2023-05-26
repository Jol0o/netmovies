import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";

const Movies = ({ request, setSelected}) => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState(request.requestPopular);
  const [movie, setMovie] = useState("");

  const getSearch = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data.results);
    setShow(true);
  };

  useEffect(() => {
    getSearch();
  }, [url]);

  const handleClick = () => {
    setUrl(
      `https://api.themoviedb.org/3/search/movie?api_key=26d265931b542ec79afe669af84f2b05&language=en-US&query=${search}&page=1&include_adult=false`
    );
  };
  const handleMovieClick = (id) => {
    setSelected(movie.find((m) => m.id === id));
  };

  return (
    <div className="movie">
      <Nav />
      <div className="movie-input">
        <input
          type="text"
          name="search"
          value={search}
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          <i className="fa fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="movie-container">
        {show
          ? movie.map((item) => (
              <Link to="/selected" key={item.id}>
                <div
                  className="container"
                  key={item.id}
                  onClick={() => handleMovieClick(item.id)}>
                  <img
                    loading="lazy"
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt="image"
                  />
                  <h3>{item.original_title}</h3>
                </div>
              </Link>
            ))
          : "Not Found"}
      </div>
    </div>
  );
};

export default Movies;
