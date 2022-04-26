import "./UsedLetters.css";

const UsedLetters = ({ lettersused }) => {
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        <li className="used-letter">{lettersused}</li>
      </ul>
    </section>
  );
};

export default UsedLetters;
