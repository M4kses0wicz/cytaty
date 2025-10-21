import  { useState } from 'react';
import './App.css'; 

const initialQuotes = [
  {
    text: "Życie jest tym, co się wydarza, kiedy jesteś zajęty robieniem innych planów.",
    author: "John Lennon"
  },
  {
    text: "Jedyną rzeczą, której musimy się bać, jest sam strach.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "Być albo nie być, oto jest pytanie.",
    author: "William Shakespeare"
  },
  {
    text: "Nigdy nie jest za późno, by stać się tym, kim mogłeś być.",
    author: "George Eliot"
  },
  {
    text: "Staraj się nie być człowiekiem sukcesu, ale raczej człowiekiem wartości.",
    author: "Albert Einstein"
  },
  {
    text: "Wielkie umysły dyskutują o ideach; przeciętne umysły dyskutują o wydarzeniach; małe umysły dyskutują o ludziach.",
    author: "Eleanor Roosevelt"
  }
];

const getRandomQuoteFromList = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};
 
function App() {

  const [quotesList, setQuotesList] = useState(initialQuotes);
 

  const [currentQuote, setCurrentQuote] = useState(() => 
    getRandomQuoteFromList(initialQuotes)
  );

  const [newQuoteText, setNewQuoteText] = useState("");
  const [newQuoteAuthor, setNewQuoteAuthor] = useState("");
 

  const handleNewQuoteClick = () => {
    setCurrentQuote(getRandomQuoteFromList(quotesList));
  };
 

  const handleAddQuote = (event) => {

    event.preventDefault(); 
 
    if (!newQuoteText.trim() || !newQuoteAuthor.trim()) {
      alert("Proszę wypełnić oba pola (treść cytatu i autor).");
      return;
    }
 
    const newQuote = {
      text: newQuoteText,
      author: newQuoteAuthor
    };
 

    setQuotesList([...quotesList, newQuote]);

    setNewQuoteText("");
    setNewQuoteAuthor("");
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
 

          <h2>Dodaj własny cytat</h2>
          <form onSubmit={handleAddQuote}>
              <textarea
                id="quoteText"
                value={newQuoteText}
                onChange={(e) => setNewQuoteText(e.target.value)}
                placeholder="Wpisz treść cytatu..."
              />
              <input
                type="text"
                id="quoteAuthor"
                value={newQuoteAuthor}
                onChange={(e) => setNewQuoteAuthor(e.target.value)}
                placeholder="Wpisz autora..."
              />
            <button type="submit" className="submit-button">
              Dodaj cytat
            </button>
          </form>
 
      </div>
    </main>
  );
}
 
export default App;
