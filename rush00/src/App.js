import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
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

export const UserAuthenticated = createContext(null);
export const SetUser = createContext(() => {});

export function App() {
  const [email, setEmail] = useState(null);
  const [mode, setMode] = useState("home");

  return (
    <div className="App">
      <BrowserRouter basename="piscine-rush00">
        <UserAuthenticated.Provider value={email}>
          <SetUser.Provider value={setEmail}>
            <header>
              <Link to="/" onClick={() => setMode("home")}>
                <h1>Markdown Board</h1>
              </Link>
            </header>
            <NavBar mode={mode} setMode={setMode} />
            <Route path="/" exact={true} component={MainPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={LogoutPage} />
            <Route path="/board" component={BoardPage} />
          </SetUser.Provider>
        </UserAuthenticated.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}
