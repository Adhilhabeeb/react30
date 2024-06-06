import React, { Component, useState } from "react";
import Navbar from "./navbar/Navbar";
import "./app.css";
import Main from "./main/Main";
import Banne from "./banne/Banne";
import Movie from "./movies/Movie";
import Login from "./Login";

function App() {
  let [logeed, setloggin] = useState(false);

  return logeed ? (
    <div>
      <div className="main">
        <Navbar loggin={logeed} setloggin={setloggin} />
        <div className="hedh1p">
          welcome back! <br />
          <h1>Unlimited movies, Tv shows and more</h1> <br />
          <p>Watch anymore. Cancel anytime</p>
          <button>
            finish signup{" "}
            <i
              className="fa-solid fa-chevron-right"
              style={{ fontSize: "25px" }}
            ></i>
          </button>
        </div>
      </div>

      <Main />
    </div>
  ) : (
    <Login login={logeed} setloggin={setloggin} />
  );
}

export default App;
