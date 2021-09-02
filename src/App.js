import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route component={Main} path="/main"/>
        <Route component={Home} exact path="/"/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
