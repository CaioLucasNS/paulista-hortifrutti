import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";

// navigation
import Navigation from "./components/Navigation/Navigation";

// import Navigation from "./components/Navigation/Navigation";
// import Promocoes from "./components/Navigation/Promocoes";
// import ListaDePromocao from "./components/Navigation/ListaDePromocao";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
