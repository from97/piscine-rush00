import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
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

  li {
    list-style: none;
  }

  #root {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans', sans-serif;
    font-weight: normal;
    color: #343a3f;
  }

  header {
    display: flex;
    justify-content: center;
    padding: 30px 0;
    h1 {
      cursor: pointer;
    }
  }
`;

function App() {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState("home");
  const authenticated = user != null;

  const handleLogin = (props) => {
    setUser(props.email);
  };

  const handleLogout = (props) => {
    setUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter basename="piscine-rush00">
        <header>
          <Link to="/" onClick={() => setMode("home")}>
            <h1>Markdown Board</h1>
          </Link>
        </header>
        <NavBar mode={mode} setMode={setMode} />
        <Route path="/" exact={true} component={MainPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/login" render={() => <LoginPage login={handleLogin} />} />
        <Route path="/board" component={BoardPage} />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
