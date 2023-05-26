import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Pages from "./Pages";
import requests from "./Request";
import "./App.css";
import { auth } from "../firebase/config";

function App() {
  const [api, setApi] = useState("");
  const [selected, setSelected] = useState("");
  const [loginUser, setLoginUser] = useState(false);

  const random = api[Math.floor(Math.random() * api.length)];

  const getData = () =>
    fetch(requests.requestPopular)
      .then((response) => response.json())
      .then((response) => setApi(response.results));

  useEffect(() => {
    getData();
    auth;
  }, []);

  return (
    <div className="App">
      <Router>
        <Pages
          data={api}
          random={random}
          request={requests}
          setLoginUser={setLoginUser}
          loginUser={loginUser}
          selected={selected}
          setSelected={setSelected}
        />
        {auth.currentUser && <Footer />}
      </Router>
    </div>
  );
}

export default App;
