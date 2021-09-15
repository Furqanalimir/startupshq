import './App.css';
import ListPost from './components/ListPost';
import ListComment from './components/ListComment';
import { ContextProvider } from './context/Context';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Link to='/' className="link"><h1 className="heading">StartupsHQ</h1></Link>
          <Switch>
            <Route exact path='/'>
              <ListPost />
            </Route>
            <Route path='/comments'>
              <ListComment />
            </Route>
          </Switch>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
