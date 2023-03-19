import "./App.css";

import { Header } from "./components/common/Header.js";
import { Search } from "./components/search/Search.js";
import { UserList } from "./components/user-list/UserList.js";
import { Paginantion } from "./components/Pagination.js";
import { Footer } from "./components/common/Footer.js";

import { UserProvider } from "./context/UserContext.js";

function App() {
    return (
        <div>
            <Header />
            <UserProvider>
                <main className="main">
                    <section className="card users-container">
                        <Search />
                        <UserList />
                        <Paginantion />
                    </section>
                </main>
            </UserProvider>
            <Footer />
        </div>
    );
}

export default App;
