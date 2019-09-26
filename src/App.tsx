import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { Home, Page1, Page2 } from './pages'

const App: React.FC = () => {
  const initialState = {
    name: "Guest"
  }

  const [name, setName] = useState(initialState.name)

  return <Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page1/">Page 1</Link>
        </li>
        <li>
          <Link to="/page2/">Page 2</Link>
        </li>
      </ul>
    </nav>

    <div><p>{name}</p></div>

    <Route path="/" exact component={Home} />
    <Route path="/page1/">
      <Page1 resetName={() => setName(initialState.name)} />
    </Route>
    <Route path="/page2/">
      <Page2 name={name} setName={newName => setName(newName)}/>
    </Route>
  </div>
</Router>
}

export default App;
