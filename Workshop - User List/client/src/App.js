import { Header } from "./components/common/Header.js";
import { Search } from "./components/search/Search.js";
import { UserList } from "./components/user-list/UserList.js";
import { Paginantion } from "./components/Pagination.js";
import { Footer } from "./components/common/Footer.js";
import "./App.css";

function App() {
    return (
        <div>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />
                    <UserList />
                    <Paginantion />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
