import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header.js";
import { BooksList } from "./components/BooksList.js";
import { Timer } from "./components/Timer.js";
import { Clicker } from "./components/Clicker.js";
import { Counter } from "./components/Counter.js";

const books = [
  {
    title: "Eloquent JavaScript, Third Edition",
    subtitle: "A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    price: 25.5,
  },
  {
    title: "Practical Modern JavaScript",
    subtitle: "Dive into ES6 and the Future of JavaScript",
    author: "Nicolás Bevacqua",
    price: 25.5,
  },
  {
    title: "Understanding ECMAScript 6",
    subtitle: "The Definitive Guide for JavaScript Developers",
    author: "Nicholas C. Zakas",
    price: 25.5,
  },
  {
    title: "Speaking JavaScript",
    subtitle: "An In-Depth Guide for Programmers",
    author: "Axel Rauschmayer",
    price: 25.5,
  },
  {
    title: "Learning JavaScript Design Patterns",
    subtitle: "A JavaScript and jQuery Developer's Guide",
    author: "Addy Osmani",
    price: 25.5,
  },
  {
    title: "You Don't Know JS Yet",
    subtitle: "Get Started",
    author: "Kyle Simpson",
    price: 25.5,
  },
  {
    title: "Pro Git",
    subtitle: "Everything you neeed to know about Git",
    author: "Scott Chacon and Ben Straub",
    price: 25.5,
  },
  {
    title: "Rethinking Productivity in Software Engineering",
    subtitle: "",
    author: "Caitlin Sadowski, Thomas Zimmermann",
    price: 25.5,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header>Library</Header>
        <Counter />
        <Clicker />
        <Timer />
        <BooksList books={books} />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
