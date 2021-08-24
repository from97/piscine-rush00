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

export const UserAuthenticated = createContext({
  state: {
    nickname: null,
    email: null,
  },
  actions: {
    setNickname: () => {},
    setEmail: () => {},
  },
});

export function App() {
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);

  const value = {
    state: { nickname, email },
    actions: { setNickname, setEmail },
  };

  return (
    <div className="App">
      <BrowserRouter basename="piscine-rush00">
        <UserAuthenticated.Provider value={[value.state, value.actions]}>
          <header>
            <Link to="/" onClick={() => setMode("home")}>
              <h1>Markdown Board</h1>
            </Link>
          </header>
          <NavBar />
          <Route path="/" exact={true} component={MainPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={LogoutPage} />
          <Route path="/board" component={BoardPage} />
        </UserAuthenticated.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}
