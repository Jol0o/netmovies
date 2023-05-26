import React, { useState, useEffect } from "react";
import Category from "./Category";
import Nav from "./Nav";
import Front from "../components/Pages/Front";
import { auth } from "../../firebase/config";

const main = ({
  random,
  request,
  loginUser,
  setLoginUser,
  setSelected,
  selected,
}) => {
  const [modal, setModal] = useState(false);
  const [trailer, setTrailer] = useState("");

  const handleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    auth;
  }, []);

  useEffect(() => {
    if (random) {
      getTrailer();
    }
  }, [random]);

  const getTrailer = () => {
    if (random && random.id) {
      fetch(
        `https://api.themoviedb.org/3/movie/${random.id}/videos?api_key=26d265931b542ec79afe669af84f2b05&language=en-US`
      )
        .then((response) => response.json())
        .then((response) => setTrailer(response.results));
    }
  };

  return (
    <>
      {auth.currentUser ? (
        <>
          <div className="main">
            <img
              className="bg"
              src={`https://image.tmdb.org/t/p/w500/${random?.backdrop_path}`}
              alt="image"
            />
            <div className="main-container">
              <Nav />
              <div className="txt">
                <h1>{random?.original_title}</h1>
                <p>{random?.overview}</p>
                <div className="main-btn">
                  <button className="watch">Watch Now</button>
                  <button className="trailer" onClick={handleModal}>
                    Watch Trailer
                  </button>
                </div>
                {modal && (
                  <div className="modal">
                    <div className="overlay" onClick={handleModal}></div>
                    <div className="modal-content">
                      <iframe
                        width="800"
                        height="500"
                        src={`https://www.youtube.com/embed/${trailer[0].key}`}
                        title="YouTube video player"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${random?.poster_path}`}
              />
            </div>
          </div>
          <div className="section">
            <div className="card">
              <Category
                request={request}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </div>
        </>
      ) : (
        <Front setLoginUser={setLoginUser} loginUser={loginUser} />
      )}
    </>
  );
};

export default main;
