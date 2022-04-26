import "./GuessLetters.css";

const GuessLetters = ({ letter }) => {
  return (
    <ul className="guess-letters">
      <li className="guess-letter empty">{letter}</li>
      <li className="guess-letter"></li>
    </ul>
  );
};

export default GuessLetters;
