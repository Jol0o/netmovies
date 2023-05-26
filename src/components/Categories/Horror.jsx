import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Horror({ request , setSelected }) {
  const [horror, setHorror] = useState([]);

  const getHorror = () =>
    fetch(request.requestHorror)
      .then((response) => response.json())
      .then((response) => setHorror(response.results));

  useEffect(() => {
    getHorror();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

   const handleMovieClick = (id) => {
    setSelected(horror.find((m) => m.id === id));
  };
  return (
    <>
      <div className="btn">
        <h2>Horror</h2>
        <button>View More</button>
      </div>
      <Carousel
        responsive={responsive}
      
        infinite={true}
       
        removeArrowOnDeviceType={["tablet", "mobile"]}
        transitionDuration={500}>
        {!horror.length ? (
          <div>No Movies</div>
        ) : (
          horror.map((item) => (
            <Link to='/selected' key={item.id}>
              <div className="coming-card" onClick={() => handleMovieClick(item.id)}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  alt={item.title}
                />
                <h2>{item.title}</h2>
              </div>
            </Link>
          ))
        )}
      </Carousel>
    </>
  );
}
