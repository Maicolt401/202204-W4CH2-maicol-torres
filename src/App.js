import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";

function App() {
  const getMyLetter = (letter) => {
    letter.preventDefault();
    // return console.log(letter.target.textContent);
    return letter.target.textContent;
  };

  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters />
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
