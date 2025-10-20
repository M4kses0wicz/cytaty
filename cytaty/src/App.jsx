import { useState } from "react";
import "./App.css";

const quotes = [
  {
    text: "Życie jest tym, co się wydarza, kiedy jesteś zajęty robieniem innych planów.",
    author: "John Lennon",
  },
  {
    text: "Jedyną rzeczą, której musimy się bać, jest sam strach.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Być albo nie być, oto jest pytanie.",
    author: "William Shakespeare",
  },
  {
    text: "Nigdy nie jest za późno, by stać się tym, kim mogłeś być.",
    author: "George Eliot",
  },
  {
    text: "Staraj się nie być człowiekiem sukcesu, ale raczej człowiekiem wartości.",
    author: "Albert Einstein",
  },
  {
    text: "Wielkie umysły dyskutują o ideach; przeciętne umysły dyskutują o wydarzeniach; małe umysły dyskutują o ludziach.",
    author: "Eleanor Roosevelt",
  },
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

function App() {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  const handleNewQuoteClick = () => {
    setCurrentQuote(getRandomQuote());
  };

  return (
    <main>
      <div className="card">
        <h1>Generator Losowych Cytatów</h1>

        <div className="quote-box">
          <p className="quote-text">"{currentQuote.text}"</p>
          <footer className="quote-author">- {currentQuote.author}</footer>
        </div>

        <button onClick={handleNewQuoteClick}>Losuj Nowy Cytat</button>
      </div>
    </main>
  );
}

export default App;
