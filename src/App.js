import "./styles.css";
import { useState } from "react";
const bookDB = {
  Coding: [
    { name: "Eloquent JavaScript", author: "Marijn Haverbeke" },
    { name: "JavaScript: The Good Parts", author: "Douglas Crockford" },
    {
      name: "JavaScript and JQuery: Interactive Front-End Web Development",
      author: "David Sawyer McFarland"
    }
  ],
  Anime: [
    {
      name: "Demon Slayer series",
      author: "Koyoharu Gotouge"
    },
    {
      name: "Bleach 3-in-1 Edition",
      author: "Lance Caselman"
    }
  ],
  Fantasy: [
    {
      name: "Harry Potter series",
      author: "J. K. Rowling"
    },
    {
      name: "Pride and Prejudice",
      author: "Jane Austen"
    },
    {
      name: "The Alchemist",
      author: "Paulo Coelho"
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
