import React from "react";
import "./App.css";
import { TodoPage } from "./components/TodoList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Detail } from "./components/detailView";
// import { Form } from './components/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <TodoPage />
            </Route>
            <Route path="/:id">
              <Detail />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
