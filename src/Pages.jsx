import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Movies from "./components/Pages/Movies";
import SelectedMovie from "./components/Pages/SelectedMovie";
import Tv from "./components/Pages/Tv";

const Pages = ({
  data,
  random,
  request,
  setLoginUser,
  loginUser,
  setSelected,
  selected,
}) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              data={data}
              random={random}
              request={request}
              setLoginUser={setLoginUser}
              loginUser={loginUser}
              selected={selected}
              setSelected={setSelected}
            />
          }
        />
        <Route
          path="/movie"
          element={
            <Movies
              data={data}
              request={request}
              selected={selected}
              setSelected={setSelected}
            />
          }
        />
        <Route path="/Tv" element={<Tv request={request} />} />
        <Route
          path="/selected"
          element={<SelectedMovie selected={selected} />}
        />
      </Routes>
    </>
  );
};

export default Pages;
