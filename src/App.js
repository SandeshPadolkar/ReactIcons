//import logo from './logo.svg';
import './App.css';
import  Navbar from './Components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Team from './pages/Team';
import Messages from './pages/Messages';
import Help from './pages/Help';


function App() {
  return (
    <Router>
    <Navbar />
    
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/reports' component={Reports} />
      <Route path='/products' component={Products} />
      <Route path='/team' component={Team} />
      <Route path='/messages' component={Messages} />
      <Route path='/help' component={Help} />
      </Switch>
    </Router>
  
    
  );
}

export default App;