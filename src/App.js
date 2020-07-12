import React from 'react';
import './App.css';
import Home from './components/home'
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import { Provider } from 'react-redux';
import store from './redux/store'


/*import React from 'react';
import { connect } from 'react-redux';
import './Controls.css';*/


function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <p>Here</p>
          <Switch>
            <Route path="/page">
              <Link to="/">Go back</Link>
            </Route>
            <Route path="/">
              <div className="App">
                <Home />
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
