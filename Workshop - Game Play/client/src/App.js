import "./App.css";
import { Home } from "./components/Home/Home.js";
import { Navigation } from "./components/Navigation/Navigation.js";

function App() {
    return (
        <div id="box">
            <Navigation />
            {/* Main Content */}
            <main id="main-content" />
            <Home />
        </div>
    );
}

export default App;
