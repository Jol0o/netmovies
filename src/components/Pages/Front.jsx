import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./../../../firebase/config";

const Front = ({ loginUser, setLoginUser }) => {
  const [modal, setModal] = useState(false);
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setLoginUser(!loginUser);
    } catch (err) {
      console.log(err);
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoginUser(!loginUser);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const onClick = () => {
    setRegister((prev) => !prev);
  };

  return (
    <>
      {
        <div className="front-container">
          <img src="/public/img/front.jpg" alt="" className="front-img" />
          <div className="nav">
            <div className="nav-container">
              <div className="nav-logo">
                <h2>NetMovies</h2>
              </div>
              <div className="nav-btn">
                <button onClick={toggleModal}>Sign Up</button>
              </div>
            </div>
          </div>
          <div className="front-main">
            <div className="front-card">
              <h1> Unlimited movies, TV shows, and more.</h1>
              <h3>Watch anywhere. Cancel anytime.</h3>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="front-input">
                <input type="email" name="email" className="email" />
                <input
                  type="button"
                  value="Get Started"
                  className="front-btn"
                />
              </div>
            </div>
          </div>

          {modal && (
            <div className="modal">
              <div className="overlay" onClick={toggleModal}></div>
              <div className="modal-form">
                {!register ? (
                  <form onSubmit={signin}>
                    <div className="form-container">
                      <h2>Sign in</h2>
                      {error}
                      <input
                        className="input"
                        type="text"
                        placeholder="Email or Phone Number"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button>Sign In</button>
                      <div className="me">
                        <div>
                          <input
                            type="checkbox"
                            id="remember"
                            name="remember"
                          />
                          <label htmlFor="remember">Remember me</label>
                        </div>

                        <p>Need help?</p>
                      </div>

                      <h4 onClick={onClick}>Sign up Now</h4>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={signup}>
                    <div className="form-container">
                      <h2>Create an account</h2>
                      <input
                        className="input"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={details.name}
                        onChange={handleChange}
                      />
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={details.email}
                        onChange={handleChange}
                      />
                      <input
                        type="password"
                        className="input"
                        name="password"
                        value={details.password}
                        placeholder="Password"
                        onChange={handleChange}
                      />
                      <button>Sign Up</button>
                      <h4 onClick={onClick}>Sign in</h4>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      }
    </>
  );
};

export default Front;
