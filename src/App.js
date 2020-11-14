/* eslint-disable react/react-in-jsx-scope */
import "./App.css";

import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BookList />
    </div>
  );
}

export default App;
