import React,{Component} from 'react';
import './App.css';
import Search from './components/Search'
import Details from './components/Details'
import {BrowserRouter as Router,Route} from 'react-router-dom'

class App extends Component {
  render(){
  return (
    <div className="App">
      <Router>
      <div>
      <Route exact path="/" component={Search}/>
      <Route exact path="/:imdbID" component={Details}/>
      {/* <Route path="/searchresults" component={Show}/> */}
      </div>
  </Router>
    </div>
  );
}
}
export default App;
