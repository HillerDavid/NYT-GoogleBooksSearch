import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Jumbotron from './components/Jumbotron'
import Search from './pages/Search'
import Saved from './pages/Saved'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div className='container'>
            <Jumbotron />
            <Switch>
              <Route exact path='/' component={Search} />
              <Route exact path='/books' component={Saved} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
