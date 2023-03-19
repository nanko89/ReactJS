import "./App.css";
import Jokes from "./components/Jokes.js";
import ErrorBoundary from "./common/ErrorBoundary.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ErrorBoundary>
                    <Jokes />
                </ErrorBoundary>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
