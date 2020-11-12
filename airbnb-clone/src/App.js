import './App.css';
import Homepage from './homepage';
import Searchpage from './searchpage';
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">

      <Router>
              
        <Header/>

        <Switch>
          
          <Route path="/search">
            <Searchpage/>
          </Route>

          <Route path="/">
            <Homepage/>
          </Route>
      
        </Switch>
        
        <Footer/>
      
      </Router>
    </div>
  );
}

export default App;
