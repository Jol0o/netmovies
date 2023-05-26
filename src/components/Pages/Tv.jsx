import React, { useState, useEffect } from "react";
import Nav from "../Nav";

export default function Tv({ request }) {
  const [tv, setTv] = useState([]);

  const getTv = () =>
    fetch(request.requestTv)
      .then((response) => response.json())
      .then((response) => setTv(response.results));

  useEffect(() => {
    getTv();
  }, []);
  return (
    <>
      <Nav />
      <div className="tv-container">
        {tv.length === 0
          ? "Loading"
          : tv.map((item) => (
              <div className="tv-card" key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt="image"
                />
                <h3>{item.name}</h3>
                <p>{item.first_air_date}</p>
              </div>
            ))}
      </div>
    </>
  );
}