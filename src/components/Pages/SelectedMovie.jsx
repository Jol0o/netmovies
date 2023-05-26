import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SelectedMovie = ({ selected }) => {
  const [similar, setSimilar] = useState("");
  const [trailer, setTrailer] = useState("");

  const getSimilar = () =>
    fetch(
      `https://api.themoviedb.org/3/movie/${selected.id}/similar?api_key=26d265931b542ec79afe669af84f2b05&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((response) => setSimilar(response.results));

  useEffect(() => {
    getSimilar();
    getTrailer();
  }, []);

  const getTrailer = () =>
    fetch(
      `https://api.themoviedb.org/3/movie/${selected.id}/videos?api_key=26d265931b542ec79afe669af84f2b05&language=en-US`
    )
      .then((response) => response.json())
      .then((response) => setTrailer(response.results));

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
     <div className="selected">
        <img
          src={`https://image.tmdb.org/t/p/w500/${selected.backdrop_path}`}
          alt={selected.title}
          className="back"
        />
        <Nav />
        <div className="selected-container">
          <div className="selected-img">
            <img
              src={`https://image.tmdb.org/t/p/w500/${selected.poster_path}`}
              alt=""
            />
          </div>
          <div className="selected-info">
            <h1>{selected.title}</h1>
            <div className="category">
              <ul>
                <li>Family</li>
                <li>Fantasy</li>
                <li>Animation </li>
                <li>Action</li>
                <li>Adventure</li>
              </ul>
              <p>{selected.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="trailer-vid">
        <h3>International Trailer</h3>
        <div className="Trailer-container">
          {trailer.length ? (
            <iframe
              src={`https://www.youtube.com/embed/${trailer[0].key}`}
              height="600"
              width="100%"
              title="video"></iframe>
          ) : null}
        </div>
      </div>
      <div className="similar">
        <Carousel responsive={responsive}>
          {!similar.length ? (
            <div>No Movies</div>
          ) : (
            similar.map((item) => (
            
              <div className="similar-card" key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.original_title}
                  loading="lazy"
                />
                <h3>{item.original_title}</h3>
              </div>
             
            ))
          )}
        </Carousel>
      </div>
    </>
  );
};

export default SelectedMovie;
