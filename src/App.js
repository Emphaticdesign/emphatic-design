import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import MyNav from "./Components/Navbar/MyNav";
function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <Router>
        <Switch>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
