import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './pages/About';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <h1>Welcome to the E-Commerce Site!</h1>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
