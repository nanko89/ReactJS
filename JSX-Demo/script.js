var rootElement = document.getElementById("root");
var root = ReactDOM.createRoot(rootElement);

var reactElement = React.createElement("h1", {}, "Hello from React");

root.render(reactElement);