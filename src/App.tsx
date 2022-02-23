import Game from "./components/Game"
import React from "react";
import './App.css';
import { HiMenu } from 'react-icons/hi';//ReactIconsを利用してるっぽい

function App() {
  return (
    <>
      <header>

        <span id="title">Busiodle</span>
        <span></span>
      </header>
      <Game />
      <footer>

      </footer>
    </>
  );
}

export default App;
