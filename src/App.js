import { useState } from "react";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

function App() {
  const [myLetters, setMyLetters] = useState([]);

  const getMyLetter = (letter) => {
    letter.preventDefault();
    const myLetter = letter.target.textContent;
    setMyLetters([...myLetters, myLetter]);
  };

  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters lettersused={myLetters} />
          <Hangman />
        </div>
        <GuessLetters />
        <Result />
        <Letters action={getMyLetter} />
      </div>
    </>
  );
}

export default App;
