import "./styles.css";
import { useState } from "react";
const bookDB = {
  Coding: [
    { name: "Eloquent JavaScript", author: "Marijn Haverbeke", rating: "5" },
    {
      name: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      rating: "4"
    },
    {
      name: "JavaScript and JQuery: Interactive Front-End Web Development",
      author: "David Sawyer McFarland",
      rating: "4"
    }
  ],
  Anime: [
    {
      name: "Demon Slayer series",
      author: "Koyoharu Gotouge",
      rating: "5"
    },
    {
      name: "Bleach 3-in-1 Edition",
      author: "Lance Caselman",
      rating: "5"
    },
    { name: "Skip beat!", author: "Yoshiki Nakamura", rating: "4" }
  ],
  Fantasy: [
    {
      name: "Harry Potter series",
      author: "J. K. Rowling",
      rating: "5"
    },
    {
      name: "Pride and Prejudice",
      author: "Jane Austen",
      rating: "3"
    },
    {
      name: "The Alchemist",
      author: "Paulo Coelho",
      rating: "4"
    }
  ]
};

export default function App() {
  const [selectedButton, setButton] = useState("Coding");

  function clickHandler(item) {
    setButton(item);
  }

  var mybook = Object.keys(bookDB);

  return (
    <div className="App">
      <span className="title"> My Books! 📚</span>
      <p class="txt">Select a genre from below to get recommendations </p>

      <div>
        {mybook.map((item) => (
          <button
            key={item}
            className="selectionTabs"
            onClick={() => clickHandler(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div>
        <ul>
          {bookDB[selectedButton].map((book) => (
            <li className="list" key={book.name}>
              <div className="book"> {book.name} </div>
              <div className="author"> - {book.author} </div>
              <div className="rating"> {book.rating}/5 </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
