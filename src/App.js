import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import UsersBooksPage from './components/UsersBooksPage';
import BooksDetailsPage from './components/BooksDetailsPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/users-books" component={UsersBooksPage}/>     
          <Route path="/books-details/:id" component={BooksDetailsPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
