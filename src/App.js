import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListbookComponent from "./component/book/ListBookComponent";
import AddbookComponent from "./component/book/AddBookComponent";
import EditbookComponent from "./component/book/EditBookComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>React book Application</h1>
                  <Switch>
                      <Route path="/" exact component={ListbookComponent} />
                      <Route path="/books" component={ListbookComponent} />
                      <Route path="/add-book" component={AddbookComponent} />
                      <Route path="/edit-book" component={EditbookComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'green',
    margin: '10px'
}
export default App;
