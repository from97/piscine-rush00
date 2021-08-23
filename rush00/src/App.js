import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import BoardPage from "./pages/BoardPage";
import ProfilePage from "./pages/ProfilePage";
import NavBar from "./components/NavBar/NavBar";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, ul, input, textarea, button, a {
    all: unset;
    color: #343a3f;
  }

  a,button {
    cursor: pointer;
  }

  #root {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans', sans-serif;
    font-weight: normal;
    color: #555;
  }

  header {
    display: flex;
    justify-content: center;
  }
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h1>Header</h1>
        </header>
        <NavBar />
        <Route path="/" exact={true} component={MainPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/board" component={BoardPage} />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
