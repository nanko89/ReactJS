import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { NewItem } from "./components/NewItem.js";
import { TodoList } from "./components/TodoList.js";

function App() {
    return (
        <div>
            <Header />
            <main className="main">
                <section className="todo-list-container">
                    <h1>Todo List</h1>
                    <NewItem />
                    <div className="table-wrapper">
                        <TodoList />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
