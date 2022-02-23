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
      <h6 id="introduce">This game is copy of WORDLE. The original code was created by @Blu3mo, and Busiodle is a modified version of it.</h6>
      </footer>
    </>
  );
}

export default App;
